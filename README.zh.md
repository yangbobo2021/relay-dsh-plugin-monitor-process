# Relay Process Monitor Capability

[![npm 版本](https://img.shields.io/npm/v/relay-dsh-plugin-monitor-process?label=npm)](https://www.npmjs.com/package/relay-dsh-plugin-monitor-process)
[![CI](https://github.com/yangbobo2021/relay-dsh-plugin-monitor-process/actions/workflows/ci.yml/badge.svg)](https://github.com/yangbobo2021/relay-dsh-plugin-monitor-process/actions/workflows/ci.yml)
[![MIT 许可证](https://img.shields.io/github/license/yangbobo2021/relay-dsh-plugin-monitor-process)](LICENSE)

[English](README.md) | 中文

本扩展为 Agent 自定义 Relay Monitor Bundle 提供只读、身份安全的进程状态能力。它不会
预注册 Bundle Type：Agent 在目录中找不到进程类型后，先签发已授权的 Process Handle，
再通过 `relay-monitor-author` Skill 创建任务范围的临时 Bundle。

请与 Monitor Core 和 Author 一起安装公开正式版本：

```bash
npx @deepseek-ai/dsh@0.1.2-alpha.3 plugin --profile web add --save-exact \
  relay-dsh-plugin-monitors@0.3.0 \
  relay-dsh-plugin-monitor-process@0.1.0 \
  relay-dsh-plugin-monitor-author@0.1.0
```

插件签发与 Session 和项目绑定的不透明 Process Handle。PID 只在签发 Handle 时
使用，绝不会写入自定义 Bundle。
