import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Carousel } from "react-responsive-carousel";
import Notif from "./components/notif.js";
import Checkout from "./components/Checkout.js";
import Menu from "./components/Menu.js";
import MainMenu from "./components/MainMenu.js";
import Content from "./components/Content.js";
import nameFetcher from "./helpers/nameFetcher.js";
import { Grid, Image, Modal, Button } from "semantic-ui-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: 0,
      open: false,
      name: ''
    };
  }

  incrementValue = () => {
    const { cart } = this.state;
    this.setState({
      cart: cart + 1
    });
  };

    async fetchName() {
        const { name } = this.state;
        if( name === '' ) {
            const name = await nameFetcher();
            this.setState({
                name
            });
        }
    }

  showCarousel() {
    const images = [
      "https://picsum.photos/id/194/300/400",
      "https://picsum.photos/id/769/300/400",
      "https://picsum.photos/id/379/300/400"
    ];
    return images.map(image => {
      return (
        <div>
          <img src={image} />
        </div>
      );
    });
  }
  render() {
    this.fetchName();
    const { cart, name } = this.state;
    return (
      <div className="App">
        <div class="columns">
          <div class="column is-1" style={{width: "6%", marginTop: "100px", padding: "0" }}>
            <Menu />
          </div>
          <div class="column is-5" style={{paddingLeft: "0"}}>
            <Carousel>{this.showCarousel()}</Carousel>
          </div>
          <div class="column is-3" style={{ marginTop: "100px", marginLeft: "50px" }}>
            <MainMenu />
            <Content />
            <Checkout incrementValue={this.incrementValue} />
          </div>
          <div className="column is-2 has-text-right"  style={{ padding: "0px", paddingRight: "10px", marginTop: "60px", fontWeight: "bold" }}>{name}</div>
          <div class="column is-2" style={{paddingLeft:"0px", marginTop:"30px"}}>
            <Notif cart={cart} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
