
# Motivation
I built this small module because I wanted to use the popular [debug](https://www.npmjs.com/package/debug) module but extend it to:

- Handle different log levels out of the box
- Use colorization for different log levels (using [chalk](https://www.npmjs.com/package/chalk) )
- Add the amazing [log-symbols](https://www.npmjs.com/package/log-symbols) symbols to logs.

# Usage
This module merely extends Debug's usage and leaves all else intact. 

```javascript
const logger = require('debug-symbols')('namespace');

// Extend logger, Internally does debug.extend()
logger.extend('extend-to')

// This runs debug() as you might expect
logger.log('Default usage')

// Adding various log levels...
logger.debug('debug');
logger.info('info');
logger.warn('warn');
logger.error('error');
logger.fatal('fatal');
logger.fail('failed');
logger.success('success');
```

This will log something like this:

![](https://repository-images.githubusercontent.com/444926760/eed1683c-11fd-4eef-b88d-e71179d6ac63)