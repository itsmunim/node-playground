const { EventEmitter } = require('events');

const emitter = new EventEmitter();

function publish(topic, data) {
  emitter.emit(topic, data);
}

function subscribe(topic, callback) {
  emitter.on(topic, callback);
}

module.exports = {
  publish,
  subscribe,
};
