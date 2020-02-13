const eventEmitter = new (require('events')).EventEmitter()
const { logger } = require('logger')(module)

const EventHandler = function () {
  this.addListener = function (label, listener) {
    const newListener = eventEmitter.listeners(label).find(fnL => (fnL === listener))
    if (!newListener) {
      logger.info('[ADHESION EVENTHANDLER] Adding new listener for: ', label)
      eventEmitter.on(label, listener)
    }
    return this
  }

  this.emitEvent = function (label, ...args) {
    eventEmitter.emit(label, ...args)
    return this
  }

  return this
}

module.exports = new EventHandler()
