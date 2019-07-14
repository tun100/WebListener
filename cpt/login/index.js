const { observer, inject } = mobxReact;
import myless from './index.less';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

@gcpt
@observer
export default class LoginPage {
	render() {
		return (
			<Layout>
				<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
					<div className="logo" />
					<div className={myless['gapp-title']}>{utils.info.title}-请先登录</div>
				</Header>
				<Content style={{ padding: '0 50px', marginTop: 64 }}>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
			</Layout>
		);
	}
}
