import React from "react";

class MainMenu extends React.Component {
  render() {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu">
          <a style={{fontWeight: "bold"}} class="navbar-item">Product Details</a>
          <a class="navbar-item">Shipping info</a>
          <a class="navbar-item">Payment</a>
        </div>
      </nav>
    );
  }
}

export default MainMenu;
