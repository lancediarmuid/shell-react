import React from 'react';
import {HashRouter as Router, BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';
import Main from './Main';
import About from './About';
import Topic from './Topic';
import Home from './Home';
import Loadings from './loading';
import TabPage from './tabs';
import Gallery from './gallery';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const ANIMATION_MAP = {
    PUSH: 'forward',
    POP: 'back'
}

class TRouter extends React.Component {
    render() {
        return (
            <div>
                <Home>
                    <TransitionGroup className={'router-wrapper'}
                                     childFactory={child => React.cloneElement(
                                         child,
                                         {classNames: ANIMATION_MAP[this.props.history.action]}
                                     )}>
                        <CSSTransition
                            timeout={500}
                            key={this.props.location.pathname}
                        >
                            <Switch location={this.props.location}>
                                <Route exact={true} path={'/'} component={Main}/>
                                <Route path={'/main'} component={Main}/>
                                <Route path={'/topic'} component={Topic}/>
                                <Route path={'/about'} component={About}/>
                                <Route path={'/loadings'} component={Loadings}/>
                                <Route path={'/tabs'} component={TabPage}/>
                                <Route path={'/gallery'} component={Gallery}/>
                                <Route path={'/loginPage'} component={}/>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </Home>
            </div>
        )
    }
}

export default withRouter(TRouter)