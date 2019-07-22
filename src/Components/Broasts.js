import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class Broasts extends Component {
    render() {
        return() {
            <div>test
                <p>{this.props.boasts}</p>
                <p>{this.props.roasts}</p>
            </div>
        }
    }
}

export default Broasts