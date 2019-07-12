var routeManager = require.context('../routes')

module.exports = utils.createRouteHelper(routeManager)