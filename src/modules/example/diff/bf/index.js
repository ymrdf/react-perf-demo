
import React, { PureComponent }from "react";
import { Menu, Icon, Layout } from "antd";
import "./index.css";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Sider} = Layout;

class Container extends PureComponent{
	render(){
		return(
			<Layout>
				<Sider
					breakpoint="lg"
					collapsedWidth="0"
					onCollapse={(collapsed, type) => {}}
				>
					<div className="logo" style={{ background: "rgba(255,255,255,.2)", height: "32px", margin: "16px" }}  />
					<Menu theme="dark" mode="inline">
						<SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
							<MenuItemGroup key="g1" title="Item 1">
								<Menu.Item key="1">Option 1</Menu.Item>
								<Menu.Item key="2">Option 2</Menu.Item>
							</MenuItemGroup>
							<MenuItemGroup key="g2" title="Item 2">
								<Menu.Item key="3">Option 3</Menu.Item>
								<Menu.Item key="4">Option 4</Menu.Item>
							</MenuItemGroup>
						</SubMenu>
						<SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
							<Menu.Item key="5">Option 5</Menu.Item>
							<Menu.Item key="6">Option 6</Menu.Item>
							<SubMenu key="sub3" title="Submenu">
								<Menu.Item key="7">Option 7</Menu.Item>
								<Menu.Item key="8">Option 8</Menu.Item>
							</SubMenu>
						</SubMenu>
						<SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
							<Menu.Item key="9">Option 9</Menu.Item>
							<Menu.Item key="10">Option 10</Menu.Item>
							<Menu.Item key="11">Option 11</Menu.Item>
							<Menu.Item key="12">Option 12</Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
			</Layout>
		);
	}
}

export default Container;