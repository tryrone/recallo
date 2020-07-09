import React, { Component } from 'react';
import {Logo,bell} from '../../links';
import './SideStyle.scss';

export default class SideHead extends Component {
    render() {
        return (
            <div className="sideheadWrap">
                <img src={Logo} alt="cd" className="logo"/>
                <img src={bell} alt="vf" className="bell"/>
            </div> 
        )
    }
}
