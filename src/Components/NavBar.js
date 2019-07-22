import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div>
          <a href="/">All Broasts</a>
          <a href="/boasts">Boasts</a>
          <a href="/roasts">Roasts</a>
        </div>
      </nav>
    )
  }
}

export default NavBar;
