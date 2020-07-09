import React, { Component } from 'react';
import './headthree.scss';

export default class HeadThree extends Component {
    render() {
        return (
            <div className="headthreeWrap">
                <div className="h3-pt1">
                    <div className="h3-inner">
                        <p className="pe1">Personnel</p>
                        <i class="fa fa-chevron-down fown"></i>
                    </div>
                    <div className="h4-inner">
                        <p className="pe1">Call date</p>
                        <i class="fa fa-chevron-down fown"></i>
                    </div>
                    <div className="h4-inner">
                        <p className="pe1">Profile category</p>
                        <i class="fa fa-chevron-down fown"></i>
                    </div>
                    <div className="h4-inner">
                        <p className="pe1">Call status</p>
                        <i class="fa fa-chevron-down fown"></i>
                    </div>
                </div>

                <div className="searchBar">
                <i class="fas fa-search mesd"></i>
                <input  className="sr" />
                </div>
            
                <div className="viewing">
                    <p className="resfv">Viewing results</p>
                    <p className="viewofone">1-10</p>
                    <p className="resfv">of</p>
                    <p className="viewofone">12</p>

                    <div className="arr">
                    <i class="fas fa-chevron-left fade"></i>
                    <i class="fas fa-chevron-right norm"></i>
                    </div>
                </div>
            
            </div>
        )
    }
}
