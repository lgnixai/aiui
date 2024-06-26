import EventEmitter from './eventEmitter';

const EventBus = new EventEmitter();

export default abstract class GlobalEvent {
    /**
     * Subscribe the service event
     * @param name Event name
     * @param listener Listener function
     */
    public subscribe(name: string, listener: Function) {
        EventBus.subscribe(name, listener);
    }

    /**
     * Emit the service event
     * @param name Event name
     * @param args Arguments
     */
    public emit(name: string, ...args: any) {
        EventBus.emit(name, ...args);
    }

    /**
     * Count the service event
     * @param name Event name
     */
    public count(name: string) {
        return EventBus.count(name);
    }

    /**
     * Unsubscribe the specific event and the listener function
     * @param name The event name
     * @param listener optional, it unsubscribes events via name if not pass the listener function
     */
    public unsubscribe(name: string, listener?: Function) {
        EventBus.unsubscribe(name, listener);
    }

    
    /**
     * Resets the event bus.
     */
    public reset() {
        EventBus.reset();
    }
}
