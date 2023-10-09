import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import './App.css';
import DarkMode from './components/DarkMode';
import LoadingBar from 'react-top-loading-bar'
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// API key => 12778e1767df45438cfd4d814b5b6b22

export default class App extends Component {
  // bgColor = "white";
  // font = "black"

  constructor() {
    super();
    this.state = {
      bgColor: "white",
      font: "black",
      ld: "light",
      progress: 0
    };
    this.toggle = this.toggle.bind(this);
  }


  toggle() {
    if (this.state.bgColor === "white") {
      this.setState({
        bgColor: "#000000cc",
        font: "white",
        ld: "dark"
      }, function () { document.body.style.backgroundColor = this.state.bgColor; document.body.style.color = this.state.font })
    }
    else {
      this.setState({
        bgColor: "white",
        font: "black",
        ld: "light"
      }, function () { document.body.style.backgroundColor = this.state.bgColor; document.body.style.color = this.state.font })
    }

    // document.body.style.color = this.font;
  }

  setProgress = (val) => {
    this.setState({
      progress: val
    })
  }

  render() {
    return (
      <>

        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={4}
            progress={this.state.progress}
          />
          <DarkMode toggle={this.toggle} />
          <div className="container">

            <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/home">
                <News key="general" isdark={this.state.ld} category="general" setProgress={this.setProgress}/>
              </Route>
              <Route exact path="/business">
                <News key="business" isdark={this.state.ld} category="business" setProgress={this.setProgress}/>
              </Route>
              <Route exact path="/entertainment">
                <News key="entertainment" isdark={this.state.ld} category="entertainment" setProgress={this.setProgress}/>
              </Route>
              <Route exact path="/health">
                <News key="health" isdark={this.state.ld} category="health" setProgress={this.setProgress}/>
              </Route>
              <Route exact path="/science">
                <News key="science" isdark={this.state.ld} category="science" setProgress={this.setProgress}/>
              </Route>
              <Route exact path="/sports">
                <News key="sports" isdark={this.state.ld} category="sports" setProgress={this.setProgress}/>
              </Route>
              <Route exact path="/tech">
                <News key="tech" isdark={this.state.ld} category="technology" setProgress={this.setProgress}/>
              </Route>

            </Switch>
          </div>
        </Router>
      </>
    )
  }
}
