import { EventEmitter } from 'events';

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
    
        this.emit('logging', {data: message});
    }
    

}

export { Logger };