# Process Capability Test Review

The controlled-OS test launches a real child in a temporary project, asks the
production inspector to bind its PID/start identity, observes it running, terminates
it, and observes exited. It separately mutates the start identity under the same PID
and requires `identity_lost`. Cross-owner and signature mutations must fail, and the
published operation schema contains only read-only `status(handle)`.

The package suite separately verifies that a clean repository has its own lockfile,
does not import from the Relay monorepo, maps tags to npm channels exactly, and packs
only declared public files. Those checks prevent a workspace dependency from making
the independent CI or release appear green. Restart, deduplication, and stop races
remain mandatory Relay composition gates and are not inferred from the unit suite.
