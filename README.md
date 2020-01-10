# test-npm-dependants

## Usage

```bash
$ test-npm-dependants express 4.17.1 5.0.0-alpha.7
✓ [webpack-dev-server] Test suite passed
✖ [webpack-dev-server+5.0.0-alpha.7] Test suite failed
✓ [hubot] Test suite passed
✖ [hubot+5.0.0-alpha.7] Test suite failed
✓ [firebase-functions] Test suite passed
✓ [firebase-functions+5.0.0-alpha.7] Test suite passed
✓ [json-server] Test suite passed
✖ [json-server+5.0.0-alpha.7] Test suite failed
✓ [@frctl/fractal] Test suite passed
✓ [@frctl/fractal+5.0.0-alpha.7] Test suite passed
...
```

## Caveats

Tests will be run as child processes, so don't have a `TTY` attached. Any tests
relying on it, for example those reading `process.stdout.columns`, are likely
not going to work.