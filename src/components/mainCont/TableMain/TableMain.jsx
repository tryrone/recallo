import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './tablemain.scss';

export default class TableMain extends Component {
    render() {
        const data = [
            {
                date:"Today",
                time:"12:03pm",
                name:"Grace Adu",
                dura:"03:20",
                callCol:"#FFF9C4",
                callStat:"Voicenote",
                proCat:"#FFFFFF",
                actname:"Profile call",
                action:"#336799"
            },
            {
                date:"Today",
                time:"3:45pm",
                name:"Tokunbo Popoola",
                dura:"10:00",
                callCol:"#DAF7E8",
                callStat:"Answered",
                proCat:"#EEEEEE",
                actname:"Profile call",
                action:"#336799"
            },
            {
                date:"Yesterday",
                time:"3:45pm",
                name:"Kehinde Yusuf",
                dura:"01:45",
                callCol:"#DAF7E8",
                callStat:"Answered",
                proCat:"#EEEEEE",
                actname:"View profile",
                action:"#336799"
            },
            {
                date:"Sun. 19th Jan 2020",
                time:"3:45pm",
                name:"Tracy Badmus",
                dura:"-",
                callCol:"#FFE2E6",
                callStat:"Missed",
                proCat:"#FFFFFF",
                actname:"Profile call",
                action:"#333333"
            },
            {
                date:"Today",
                time:"12:03pm",
                name:"Grace Adu",
                dura:"03:20",
                callCol:"#FFF9C4",
                callStat:"Voicenote",
                proCat:"#FFFFFF",
                actname:"Profile call",
                action:"#336799"
            },
            {
                date:"Today",
                time:"3:45pm",
                name:"Tokunbo Popoola",
                dura:"10:00",
                callCol:"#DAF7E8",
                callStat:"Answered",
                proCat:"#EEEEEE",
                actname:"Profile call",
                action:"#336799"
            },
            {
                date:"Yesterday",
                time:"3:45pm",
                name:"Kehinde Yusuf",
                dura:"01:45",
                callCol:"#DAF7E8",
                callStat:"Answered",
                proCat:"#EEEEEE",
                actname:"View profile",
                action:"#336799"
            },
            {
                date:"Sun. 19th Jan 2020",
                time:"3:45pm",
                name:"Tracy Badmus",
                dura:"-",
                callCol:"#FFE2E6",
                callStat:"Missed",
                proCat:"#FFFFFF",
                actname:"Profile call",
                action:"#333333"
            },
            {
                date:"Today",
                time:"12:03pm",
                name:"Grace Adu",
                dura:"03:20",
                callCol:"#FFF9C4",
                callStat:"Voicenote",
                proCat:"#FFFFFF",
                actname:"Profile call",
                action:"#336799"
            },
            {
                date:"Today",
                time:"3:45pm",
                name:"Tokunbo Popoola",
                dura:"10:00",
                callCol:"#DAF7E8",
                callStat:"Answered",
                proCat:"#EEEEEE",
                actname:"Profile call",
                action:"#336799"
            },
            {
                date:"Yesterday",
                time:"3:45pm",
                name:"Kehinde Yusuf",
                dura:"01:45",
                callCol:"#DAF7E8",
                callStat:"Answered",
                proCat:"#EEEEEE",
                actname:"View profile",
                action:"#336799"
            },
            {
                date:"Sun. 19th Jan 2020",
                time:"3:45pm",
                name:"Tracy Badmus",
                dura:"-",
                callCol:"#FFE2E6",
                callStat:"Missed",
                proCat:"#FFFFFF",
                actname:"Profile call",
                action:"#333333"
            },
        ];
        return (
            <div className="main-ta-me">
                {
                    data.map((item)=>{
                        return(
                            <Row xl={6} className="row-me">
                    <Col>
                        <p className="to">{item.date}</p>
                        <p className="to-2">{item.time}</p>
                    </Col>
                    <Col>
                        <p className="to">{item.name}</p>
                    </Col>
                    <Col>
                        <p className="to">{item.dura}</p>
                    </Col>
                    <Col>
                    <p 
                    style={{
                        background:`${item.callCol}`,
                        borderRadius:"14px",
                        textAlign:"center",
                        fontWeight:"bold",
                        width:"90px",
                        padding:"5px 17px"
                    }}
                className="to-3">{item.callStat}</p>
                    </Col>
                    <Col>
                    <p 
                    style={{
                        background:`${item.proCat}`,
                        borderRadius:"14px",
                        textAlign:"center",
                        width:"100px",
                        padding:"5px 0px"
                    }}
                    className="to">Not yet profiled</p>
                    </Col>
                    <Col>
                    <p 
                    style={{
                        color:`${item.action}`,
                        fontWeight:"bold",
                        alignSelf:"center"
                    }}
                className="to">{item.actname}</p>
                    </Col>
                </Row>
         
                        );
                    })
                }
                   </div>
        )
    }
}
