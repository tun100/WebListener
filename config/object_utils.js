const crtUtils = {
  log (...args) {
    console.log(...args)
  },
  contains (val, str) {
    return _.indexOf(val, str) !== -1
  },
  info: {
    title: ''  
  }
}

module.exports = crtUtils
