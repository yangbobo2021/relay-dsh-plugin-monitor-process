import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFile, readdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("Process capability is a public, independently packable DSH plugin", async () => {
  const manifest = JSON.parse(await readFile(join(root, "package.json"), "utf8"));
  assert.equal(manifest.name, "relay-dsh-plugin-monitor-process");
  assert.equal(manifest.repository.url, "git+https://github.com/yangbobo2021/relay-dsh-plugin-monitor-process.git");
  assert.equal(manifest.publishConfig.access, "public");
  assert.equal(manifest.dsh.bundle.patch, "./cordis.patch.yml");
  for (const directory of ["src", "test"]) {
    for (const entry of await readdir(join(root, directory))) {
      if (!/\.(?:m?js)$/u.test(entry)) continue;
      const source = await readFile(join(root, directory, entry), "utf8");
      assert.doesNotMatch(source, /from\s+["']\.\.\/\.\.\//u, `${directory}/${entry} crosses the package boundary`);
    }
  }
  const packed = JSON.parse(execFileSync("npm", ["pack", "--ignore-scripts", "--dry-run", "--json"], {
    cwd: root,
    encoding: "utf8",
  }))[0];
  assert.ok(packed.files.some(file => file.path === "host-plugin.js"));
  assert.ok(packed.files.some(file => file.path === "cordis.patch.yml"));
  assert.equal(packed.files.some(file => /(?:^|\/)(?:node_modules|\.env)(?:\/|$)/u.test(file.path)), false);
});
