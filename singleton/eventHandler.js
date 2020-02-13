const eventHandle = (() => {
  let instance

  function init () {
    const eventEmitter = new (require('events')).EventEmitter()

    return {
      addListener: (label, fnListener) => {
        console.info('[EVENTHANDLE] new listener: ', label)
        eventEmitter.on(label, fnListener)
      },
      emit: (label, ...args) => {
        console.info('[EVENTHANDLE] emit data: ', label, args)
        eventEmitter.emit(label, ...args)
      }
    }
  }

  return {
    getInstance: () => {
      if (!instance) instance = init()
      return instance
    }
  }
})()

module.exports = eventHandle
