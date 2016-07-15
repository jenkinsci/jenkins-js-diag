# Jenkins client-side Diagnostics
 
## Installation

```
npm install --save @jenkins-cd/diag
```

## Functions
The package exposes the following functions:

### logError(category, message [, other-args])

```javascript
var diag = require('@jenkins-cd/diag');

diag.logError('sse', 'Invalid SSE event message format.', event);
```

### logDebug(category, message [, other-args])

Currently, this module uses the [diagnostics] package for logging debug messages.

> __NOTE__: One slight terminology difference between this package and the [diagnostics] package is that this package uses the term "category" (log "category") where [diagnostics] uses the term "namespace"/"name". Aside from that, everything else is the same.

```javascript
var diag = require('@jenkins-cd/diag');

diag.logDebug('sse', `SSE event ${event.jenkins_channel}/${event.jenkins_event}:`, event);
```

## Management

Please see the [diagnostics] docs for how to turn on/off debug logging in the Browser.
Error logs are always logged, so no configuration needed there.
 
[diagnostics]: https://www.npmjs.com/package/diagnostics