const { observer, inject } = mobxReact;

@gcpt
@observer
export default class LoginPage {
	render() {
		console.log(this);
		return <div>test</div>;
	}
}