import React, { Component } from 'react';
import SideHead from '../sidebarCont/sideHead/SideHead';
import './SidebarStyle.scss';
import ManageCont from '../sidebarCont/manageCont/ManageCont';
import SideHam from '../sideHam/SideHam';
import LinkCont from '../sidebarCont/linkCont/LinkCont';

export default class Sidebar extends Component {
    render() {
        return (
            
            <div className="sideWrap">
                <SideHead/> 
                <div className="sidemain">
                    <div style={{display:'flex'}}>
                    <ManageCont/>
                    <SideHam/> 
                    </div>
                    <LinkCont/>

                    
                    <p className="out">Log out</p>
                  
                </div> 
                
            </div>
        )
    }
}
