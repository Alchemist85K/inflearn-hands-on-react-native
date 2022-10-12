import { EventEmitter } from 'eventemitter3';

const event = new EventEmitter();

export const EventTypes = {
  REFRESH: 'REFRESH',
  DELETE: 'DELETE',
};

export default event;
