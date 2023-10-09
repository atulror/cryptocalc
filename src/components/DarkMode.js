import React, { Component } from 'react'

export default class DarkMode extends Component {
    
    changeImg = () => {
            let e = document.getElementById("unique");
            // e.classList.add("darkBtn2");
            // console.log(e.classList[0]);
            if(e.classList[0] === "darkBtn"){
                e.classList.add("darkBtn2");
                e.classList.remove("darkBtn");
            }
            else{
                e.classList.add("darkBtn");
                e.classList.remove("darkBtn2");
            }
        }


    render() {
        let { toggle } = this.props;
        
        return (
            <>
            <div className="d-flex flex-row-reverse bd-highlight"  style={{marginTop: '20px', marginRight: '20px'}}>
                <div className="form-check form-switch my-3 d-flex">
                    <input className="form-check-input opacity-0" type="checkbox" id="flexSwitchCheckDefault" onClick={this.changeImg} onChange={toggle}/>
                </div>
                <div className="darkBtn" id="unique"></div>
            </div>
            </>
        )
    }
}
