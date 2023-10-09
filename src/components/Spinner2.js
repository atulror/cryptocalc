import React, { Component } from 'react';
import spin from './Snake.gif';

export default class Spinner2 extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <img src={spin} alt="Loading..." />
            </div>
        )
    }
}
