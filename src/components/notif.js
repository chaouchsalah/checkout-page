import React from "react";
import { Image, Popup, Icon } from "semantic-ui-react";
import "../styles/profile.css";

class Notif extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "None"
    };
  }
  close = () => {
    this.setState({ display: "None" });
  };
  open = () => {
    this.setState({ display: "block" });
  };
  render() {
    const { display } = this.state;
    const { cart } = this.props;
    return (
      <div>
        <div onClick={this.open}>
          <div class="wrap">
            <a href="#" class="profile">
              <img src="https://picsum.photos/id/1074/300/300" />
              <div class="bottom-right">{cart}</div>
            </a>
          </div>
        </div>
        <div
          class="notification"
          style={{ marginLeft: "-120px", fontSize: "13px",paddingLeft: "35px", width: "85%", display, backgroundColor: "white", boxShadow: "0px 10px 22px rgb(186,191,206)" }}
        >
          <button class="delete" onClick={this.close}></button>
          <i class="fas fa-bell" style={{color: "rgb(127,141,181)"}}></i><br/><br/>
          <div style={{color: "rgb(127,141,181)", fontSize: "12px"}} className="has-text-justified">Thank you for shopping with us! here we would like to give you a special discout offer for today purchase</div>
        </div>
      </div>
    );
  }
}

export default Notif;
