# Process Capability Delivery Scenarios

| ID | Scenario | Required result | Evidence |
| --- | --- | --- | --- |
| MB07-001 | Handle issuance | A real same-user process inside the authenticated project yields an opaque Handle bound to Session, canonical project, PID, host, and start identity. | controlled OS test |
| MB07-002 | Running observation | Valid owner observes `running` through read-only `process.status`; no PID appears in the operation schema. | unit + contract test |
| MB07-003 | Real exit | After the bound process exits, the same Handle reports `exited`; unsupported exit code is explicitly unavailable. | controlled OS test |
| MB07-004 | Authorization denial | Cross-Session, cross-project, forged, malformed, expired, or wrong-host Handles fail closed without process data. | boundary matrix + composition |
| MB07-005 | PID reuse | Same PID with a different OS start identity reports `identity_lost`, never a false exit. | deterministic identity fixture |
| MB07-006 | Unsafe target | Missing process, other-user process, or cwd outside the project is rejected at issuance. | OS boundary fixtures |
| MB07-007 | Least authority | Provider exposes only read-only status; kill, signal, output, environment, command, and raw filesystem access are absent. | schema + denied-operation test |
| MB07-008 | Lifecycle/restart | Persistent host identity survives restart; unload removes tool/provider and reinstall restores compatible checks without duplicate delivery. | Relay composition + official DSH |
| MB07-009 | Races | Stop, process exit, duplicate check, and concurrent claim resolve to at most one durable Event/Delivery. | SQLite composition gate |
| MB07-010 | Standalone repository | Clean clone installs from its own lockfile and no runtime or test import crosses into Relay. | fresh `npm ci` + boundary scan |
| MB07-011 | Public release | GitHub `v0.1.1`, npm `0.1.1`, package metadata, packed integrity, and `latest` identify one artifact. | CI + registry query + fresh DSH profile |
