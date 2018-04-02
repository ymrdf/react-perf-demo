import "./index.css";

import React, { PureComponent }from "react";
import { Route, Redirect } from "react-router";
import { Link } from "react-router-dom";
import { Menu, Layout } from "antd";
import PerformanceTest from "@Examples/performance-test";

const { Header, Footer, Sider, Content } = Layout;

class Container extends PureComponent{
	render(){
		return(
			<Layout>
				<Sider
					breakpoint="lg"
					collapsedWidth="0"
					onCollapse={(collapsed, type) => {}}
				>
					<div className="logo" />
					<Menu theme="dark" mode="inline">
						<Menu.Item key="1">
							<Link to="/performance-test" >performance test</Link>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={styleSheet.header} />
					<Content style={styleSheet.content}>
						<div className="inner-content">
							<Route exact path="/" render={() => <Redirect to="/performance-test"/>}/>
							<Route exact path="/performance-test" component={PerformanceTest}/>
						</div>
					</Content>
					<Footer style={styleSheet.footer}>
						React performance demo.
					</Footer>
				</Layout>
			</Layout>
		);
	}
}

const styleSheet = {
	header:{ background: "#fff", padding: 0 },
	content:{ margin: "24px 16px 0" },
	footer:{ textAlign: "center" }
};

export default Container;