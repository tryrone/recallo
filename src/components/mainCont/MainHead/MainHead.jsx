import React, { Component } from 'react';
import {edit,arrowLeft} from '../../links';
import SideHam from '../../sideHam/SideHam';
import './mainhead.scss';

export default class MainHead extends Component {
    render() {
        return (
            <div className="mHeadWrap">
                <div
                className="smallHqamm"
                style={{
                    alignSelf:"center",
                    position:'relative',
                    top:"-15px"
                }}
                >
                <SideHam/>
                </div>
                <div className="heda-one">
                    <div className="inner-head-one">
                        <p className="sm-call">Calls</p>
                        <p className="ar"> {'>'} </p>
                        <p className="sm-two">Caller ID</p>
                    </div>
                    <h1 className="bg-num">+2348051113453</h1>
                </div>

                <div className="head-two">
                    <p className="con-name">Contact name</p>
                    <p className="mya">Mya Willms</p>
                </div>
                <div className="head-three">
                    <p className="con-name">Email address</p>
                    <p className="mya">myawillms@yahoo.co.uk</p>
                </div>
                <div className="head-three">
                    <p className="con-name">Company</p>
                    <p className="mya">-</p>
                </div>
            
                <div className="four">
                    <div className="circ">
                        <img src={edit} alt="vfv" className="edit"/>
                    </div>
                    <div className="back">
                        <img src={arrowLeft} alt="cdv" className="arr-le"/>
                        <p className="go-back">Go back</p>
                    </div>
                </div>
            </div>
        )
    }
}
