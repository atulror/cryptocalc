import React, { Component } from 'react'

export default class NavItem extends Component {

    render() {
        let { title, discription, imgurl, newsurl, isdark } = this.props;
        return (

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className={`card shadow-lg mb-5 bg-${isdark} newsCard`}>
                    <div style={{
                        display: "flex",
                        position: 'absolute',
                        right: '0'
                    }}>
                    <span className="badge rounded-pill bg-danger" >
                        {this.props.source}
                    </span>
                </div>
                <img src={imgurl === null ? "https://http.cat/404" : imgurl} style={{ maxHeight: "210px", minHeight: "210px", borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}} alt="Not Supported" className="card-img-top" />
                <div className="card-body d-flex">
                    <div className="d-block">
                        <h5 className="card-title" style={{ maxHeight: "72px", overflow: "hidden", minHeight: "72px" }}>{title === null ? "" : title}</h5>
                        <p className="card-text" style={{ maxHeight: "120px", overflow: "hidden", minHeight: "120px" }}>{discription === null ? "" : discription}</p>
                        <a href={newsurl} rel="noopener noreferrer" target="_blank" className="btn btn-primary btn-sm hov">Read More</a>
                    </div>
                </div>
            </div>
            </div >
        )
    }
}
