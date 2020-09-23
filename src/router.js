import React from 'react'
import {HashRouter, Route, Link, Switch} from 'react-router-dom'
import Login from './page/login/Login'
import MHeader from './components/header/MHeader'
import App from './App'

export default class ERouter extends React.Component {
    render() {
        return (
            <div className="animate-route">
                <HashRouter>
                    <App>
                        <Switch>
                            <Route exact={true} path="/" component={MHeader}/>
                            <Route path="/login" component={Login}/>
                        </Switch>
                    </App>
                </HashRouter>
            </div>
        )
    }
}