import "./index.css";

import React, { PureComponent }from "react";
import { Route, Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import { Menu, Layout } from "antd";
import PerformanceTest from "@Examples/performance-test";

const { Header, Footer, Sider, Content } = Layout;

class Container extends PureComponent{
	defaultSelectedKeys=["1"];

	redirectRender(){
		return <Redirect to="/performance-test"/>;
	}

	render(){
		return(
			<Layout>
				<Sider
					breakpoint="lg"
					collapsedWidth="0"
				>
					<div className="logo" >PERF</div>
					<Menu theme="dark" mode="inline" defaultSelectedKeys={this.defaultSelectedKeys}>
						<Menu.Item key="1">
							<NavLink to="/performance-test" >performance test</NavLink>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={styleSheet.header} >Demo to speed up React application </Header>
					<Content style={styleSheet.content}>
						<div className="inner-content">
							<Route exact path="/" render={this.redirectRender}/>
							<Route exact path="/performance-test" component={PerformanceTest}/>
						</div>
					</Content>
					<Footer style={styleSheet.footer}>
						React performance demo.
						<br />
						<a href="https://zhuanlan.zhihu.com/p/34632531" target="_blank">Click here to get the paper of this demo.</a>
					</Footer>
				</Layout>
			</Layout>
		);
	}
}

const styleSheet = {
	header:{ background: "#fff", padding: "0 40px", fontSize: "18px" },
	content:{ margin: "24px 16px 0" },
	footer:{ textAlign: "center" }
};

export default Container;