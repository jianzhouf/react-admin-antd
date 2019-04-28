import React from "components/Admin/node_modules/react"
import { Menu, Icon } from 'components/Admin/node_modules/antd';
import "./index.less";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Admin extends React.Component {

    state = {
        collapsed: false
    }

    render() {
        return <section className="z-admin-layout">
            <aside className="z-admin-aside">
                <div className="z-admin-aside-header">test</div>
                <Menu
                    defaultSelectedKeys={[location.hash.substring(1)]}
                    defaultOpenKeys={["sub1"]}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Menu.Item key="/">首页</Menu.Item>
                       
                    </SubMenu>

                </Menu>
            </aside>
            <section className="z-admin-main">
                <header className="z-admin-main-header">
                    <div className="z-admin-main-header-collapse" onClick={this.handleCollapse}>
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                    </div>
                </header>
                <main className="z-admin-main-container">
                    {this.props.children}
                </main>
            </section>
        </section>

    }


    handleCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

}