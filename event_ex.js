import { Logger } from './logger.js';

const logger = new Logger();

logger.on('logging', e => console.log("logging:", e));

logger.log('I am the one who messages');