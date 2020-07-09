import React, { Component } from 'react';
import './ManageStyle.scss';

export default class ManageCont extends Component {
    render() {
        return (
            <div className="manWrap">
                <div className="nsign">
                    <h2 className="am">AM</h2>
                </div>
                <h2 className="auto">AutoMedics Africa Limited</h2>
                <p className="agnt"> 2 agents license</p>

                <a href="#bv" className="mn">Manage your Recallo Account</a>
            </div>
        )
    }
}
