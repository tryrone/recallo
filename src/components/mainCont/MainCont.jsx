import React, { Component } from 'react'
import MainHead from './MainHead/MainHead'
import Container from 'react-bootstrap/Container';
import HeadTwo from './HeadTwo/HeadTwo'
import HeadThree from './HeadThree/HeadThree'
import TableHead from './TableHead/TableHead';
import TableMain from './TableMain/TableMain';

export default class MainCont extends Component {
    render() {
        return (
            <Container>
                <MainHead/>
                <div 
                style={{
                    padding:"0px 32px"
                }}>
                    <HeadTwo/>
                    <HeadThree/>
                    <TableHead/>
                    <TableMain/>
                </div>
            </Container>
        )
    }
}
