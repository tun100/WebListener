const crtUtils = {
  log (...args) {
    console.log(...args)
  },
  contains (val, str) {
    return _.indexOf(val, str) !== -1
  },
  createRouteHelper (routeManager) {
    const routeMap = _.chain(routeManager.keys())
			.filter(x => _.endsWith(x, 'js'))
			.mapKeys(x =>
				_.chain(x)
					.split('/')
					.get(1)
					.value()
			)
			.mapValues(x => {
  return routeManager(x)
})
			.value()
    return {
      map: routeMap,
      getRoute (routeName, props = {}) {
        crtUtils.log(routeMap, routeName, props)
        let moduleObj = routeMap[routeName]
        return <rrdm.Route component={_.get(moduleObj, 'default')} {...props} />
      }
    }
  }
}

module.exports = crtUtils
