import React from 'react';
import Routers from './router';
import {HashRouter, BrowserRouter} from 'react-router-dom';

class OutsideRouter extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Routers/>
            </BrowserRouter>
        )
    }
}

export default OutsideRouter;