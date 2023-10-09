import React, { Component } from 'react';
import linkedIn from './linkedin.png';
import github from './github.png';
import insta from './insta.png';

export default class About extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center">About Us</h1>
                <dl className="row my-5">
                    <dt className="col-sm-3">Description</dt>
                    <dd className="col-sm-9">A free online News web application which serves you fresh news directly to your table. <br />Navigate
                        through your favourite News Section and enjoy your favourite topics. Why waste Time? Lets Dive in!</dd>



                    <dt className="col-sm-3">Made By</dt>
                    <dd className="col-sm-9">Anshuman Singh</dd>

                    <dt className="col-sm-3">Get in Touch</dt>
                    <dd className="col-sm-9">
                        <dl className="row">
                            <dd className="col-sm-9 ctext"><a href="https://www.linkedin.com/in/anshuman-singh-856991201/" rel="noreferrer" target="_blank"><img src={linkedIn} alt="LinkedIn-png" height="20px" width="20px"/>   LinkedIn</a></dd>
                            <dd className="col-sm-9 ctext"><a href="https://github.com/MrSingh2000" rel="noreferrer" target="_blank"><img src={github} alt="LinkedIn-png" height="20px" width="20px"/>   GitHub</a></dd>
                            <dd className="col-sm-9 ctext"><a href="https://www.instagram.com/mr_singh2000" rel="noreferrer" target="_blank"><img src={insta} alt="LinkedIn-png" height="20px" width="20px"/>   Instagram</a></dd>
                        </dl>
                    </dd>

                </dl>
            </div>
        )
    }
}
