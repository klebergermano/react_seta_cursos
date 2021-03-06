import React, { Component } from "react";
import NavHeader from "./NavHeader";

class HeaderDesktop extends Component {
  state = {};

  render() {
    return (
      <header id="header_website">
        <div id="header_center">
          <a href="./" id="logo">
            <img src={require("../../assets/img/logo.png")} />
          </a>
          <NavHeader />
        </div>
      </header>
    );
  }
}
export default HeaderDesktop;
