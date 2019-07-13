var { observable } = mobx;
var { observer } = mobxReact;

class GlobalStore {
	id = Math.random();
	@observable title = '';
	@observable finished = false;
}

const store = new GlobalStore();

export default store;
