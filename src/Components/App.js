import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Broasting from "./Broasting";
import { Provider } from "react-redux";
// import broastsReducer from "./Reducers/reducer.js";
import { createStore } from "redux";

// let store = createStore(broastsReducer);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route exact path="/boasts" component={NavBar} />
            <Route exact path="/roasts" component={NavBar} />
            <Route exact path="/" component={NavBar} />
          </Switch>
          <Broasting endpoint="/api"/>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
