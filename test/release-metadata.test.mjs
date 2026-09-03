import assert from "node:assert/strict";
import test from "node:test";

import { releaseMetadata } from "../scripts/release-metadata.mjs";

test("release tag must match package version and stable releases use latest", () => {
  assert.deepEqual(releaseMetadata("v0.1.1", "0.1.1"), { version: "0.1.1", npmTag: "latest" });
  assert.deepEqual(releaseMetadata("v0.2.0-rc.1", "0.2.0-rc.1"), { version: "0.2.0-rc.1", npmTag: "next" });
  assert.throws(() => releaseMetadata("v0.1.0", "0.1.1"), /must exactly match/u);
});
