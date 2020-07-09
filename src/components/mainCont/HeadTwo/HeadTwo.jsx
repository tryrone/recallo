import React, { Component } from 'react';
import './headtwo.scss';

export default class HeadTwo extends Component {
    render() {
        return (
            <div className="headTwoCont">
                <p className="prev">
                Previous calls
                </p>

                <div className="min-cont">
                    <div className="prev-one">
                        <p className="twel">12</p>
                        <p className="prev-bot">Previous calls</p>
                    </div>
                    <div className="prev-two">
                        <p className="twel">4.3 mins</p>
                        <p className="prev-bot">Average call time</p>
                    </div>
                    <div className="prev-two">
                        <p className="twel">1.2 mins</p>
                        <p className="prev-bot">Average wait time</p>
                    </div>
                </div>
            </div>
        )
    }
}
