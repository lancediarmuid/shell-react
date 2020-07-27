import React from 'react'
import logo from './logo.svg'

export default class MHeader extends React.Component{
    render(){
        return (
            <div className="site-layout-content">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
            </div>
        )
    }
}