import React from 'react'
import './App.css'
import {Layout, Menu, Row, Col} from 'antd';
import {Link} from 'react-router-dom';
import logo from './components/header/logo.svg'

const {Header, Content, Footer} = Layout;
const {SubMenu} = Menu;

class App extends React.Component {
    render() {
        return (
            <div className="App">

                <Layout className="layout">
                    <Header>
                        <Menu theme="dark" className="TopBar" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item style={{paddingRight: 0,paddingLeft: 0, height: 64}} disabled={true}>
                                <div className="logo">
                                    <img src={logo} className="App-logo" style={{height: 64}} alt="logo"/>
                                </div>
                            </Menu.Item>
                            <Menu.Item key="1">
                                <Link to="/">首页</Link>
                            </Menu.Item>
                            <SubMenu title="子菜单">
                                <SubMenu title="子菜单2">
                                    <Menu.Item key="2">
                                        <Link to="/">Show a dialog</Link>
                                    </Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <Menu.Item key="3" style={{float: 'right'}}>
                                <Link to="/">注册</Link>
                            </Menu.Item>
                            <Menu.Item key="4" style={{float: 'right'}}>
                                <Link to="/login">登录</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{padding: '0 50px'}}>
                        {this.props.children}
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </div>

        )
    }
}

export default App
