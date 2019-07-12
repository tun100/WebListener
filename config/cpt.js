var cptManager = require.context('../cpt');

const cptMap = _.chain(cptManager.keys())
	.filter(x => _.endsWith(x, 'js'))
	.mapKeys(x =>
		_.chain(x)
			.split('/')
			.get(1)
			.value()
	)
	.mapValues(x => {
		return cptManager(x);
	})
	.value();

module.exports = {
	map: cptMap,
	getCpt(tagName, props = {}, children) {
		const CrtTag = _.get(cptMap, [routeName, 'default']);
		return <CrtTag {...props}>{...children}</CrtTag>;
	},
	getRoute(routeName, props = {}) {
		utils.log(cptMap, routeName, props);
		let moduleObj = cptMap[routeName];
		return <rrdm.Route component={_.get(moduleObj, 'default')} {...props} />;
	},
};
