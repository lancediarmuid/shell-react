import React from 'react';
import {Layout, Menu, Row, Col} from 'antd';
import {Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';

import './demo.css'

const {Header, Content, Footer} = Layout;
const {SubMenu} = Menu;

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Layout className={'layout'}>
                    <Header>
                        <Menu theme={'dark'} mode={'horizontal'} defaultSelectedKeys={['1']}>
                            <Menu.Item key={'1'}>
                                <Link to={'/main'}>Main</Link>
                            </Menu.Item>
                            <Menu.Item key={'2'}>
                                <Link to={'/about'}>About</Link>
                            </Menu.Item>
                            <Menu.Item key={'3'}>
                                <Link to={'topic'}>Topic</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content>
                        <CSSTransition in={true} timeout={500} classNames={'fade'} unmountOnExit={true}>
                            {this.props.children}
                        </CSSTransition>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Copyright 2020</Footer>
                </Layout>
            </div>
        )
    }
}