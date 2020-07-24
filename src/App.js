import React from 'react'
import logo from './logo.svg'
import './App.css'
import {Button} from 'antd'
import {Layout, Menu, Breadcrumb} from 'antd';

const {Header, Content, Footer} = Layout;
const {SubMenu} = Menu;

class App extends React.Component {
    render() {
        return (
            <div className="App">

                <Layout className="layout">
                    <Header>
                        <div className="logo"/>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1">标记 1</Menu.Item>
                            <SubMenu title="子菜单">
                                <Menu.Item key="2">标记 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="3">标记 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{padding: '0 50px'}}>
                        <div className="site-layout-content">
                            <header className="App-header">
                                <img src={logo} className="App-logo" alt="logo"/>
                            </header>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </div>

        )
    }
}

export default App
