import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './MainStyle.scss';
import MainCont from '../mainCont/MainCont';

export default class Main extends Component {
    render() {
        return (
            
                <React.Fragment>
                <div className="mainWrap">
                <Switch>
                <Route exact path="/" component={MainCont} />
                </Switch>
                </div>
                </React.Fragment>
        )
    }
}
