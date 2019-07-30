import React from "react";

class Checkout extends React.Component {
  render() {
    const { incrementValue } = this.props;
    return <button class="button is-medium" style={{marginRight: "-600px", padding: "35px", backgroundColor: "rgb(50,39,36)", color: "white"}} onClick={incrementValue}>Check out</button>;
  }
}

export default Checkout;
