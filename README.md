# Relay Process Monitor Capability

[![npm version](https://img.shields.io/npm/v/relay-dsh-plugin-monitor-process?label=npm)](https://www.npmjs.com/package/relay-dsh-plugin-monitor-process)
[![CI](https://github.com/yangbobo2021/relay-dsh-plugin-monitor-process/actions/workflows/ci.yml/badge.svg)](https://github.com/yangbobo2021/relay-dsh-plugin-monitor-process/actions/workflows/ci.yml)
[![MIT license](https://img.shields.io/github/license/yangbobo2021/relay-dsh-plugin-monitor-process)](LICENSE)

English | [中文](README.zh.md)

This extension supplies a read-only, identity-safe process status capability for
Agent-authored Relay Monitor Bundles. It deliberately does not add a prebuilt Bundle
Type: the Agent discovers no process type, issues an authorized Process Handle, and
uses the `relay-monitor-author` Skill to create a task-scoped Bundle.

Install the exact public release together with Monitor Core and Author:

```bash
npx @deepseek-ai/dsh@0.1.2-rc.1 plugin --profile web add --save-exact \
  relay-dsh-plugin-monitors@0.3.1 \
  relay-dsh-plugin-monitor-process@0.1.1 \
  relay-dsh-plugin-monitor-author@0.1.1
```

The same artifacts retain compatibility with audited DSH `0.1.2-alpha.3` profiles.

The plugin issues opaque, Session- and project-bound Process Handles. A PID is
accepted only at handle issuance and is never embedded in a custom Bundle.
