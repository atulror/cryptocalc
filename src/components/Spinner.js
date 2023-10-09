import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (

            <div id="loader1" style={{position: "absolute"}}>
                <div className="up">
                    <div className="one"></div>
                    <div className="two"></div>
                </div>
                <div className="down">
                    <div className="three"></div>
                    <div className="four"></div>
                </div>
            </div>

        )
    }
}
