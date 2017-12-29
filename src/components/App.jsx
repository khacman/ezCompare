import React, {Component} from "react";
import {Route} from "react-router-dom";
import {Jumbotron} from "react-bootstrap";
// import logo from "./logo.svg";
import "./App.css";
import About from "./About";
import Compare from "./Compare";

class App extends Component {
    render() {
        return (
            <div className="App row">
                <header>
                    <Jumbotron>
                        {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                        <h1 className="App-title">
                            Welcome to EzCompare
                        </h1>
                        <p>Simple product comparision service</p>
                    </Jumbotron>
                </header>
                {/*<div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <hr/>*/}
                <Route exact path="/" component={Compare}/>
                <Route exact path="/about" component={About}/>
            </div>
        );
    }
}

export default App;
