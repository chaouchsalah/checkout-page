import React from "react";
import '../styles/menu.css'
import styled from 'styled-components'

const Links = {
    color: "rgb(186,191,206)",
    marginTop: "15px",
    fontSize: "18px"
}
const Menu = () => {
  return (
    <aside class="menu">
      <ul class="menu-list">
        <li>
          <a style={Links}><i class="fas fa-store"></i></a>
        </li>
        <li>
          <a style={Links}><i class="fas fa-tags"></i></a>
        </li>
        <li>
          <a style={Links}><i class="fas fa-box-open"></i></a>
        </li>
        <li>
          <a style={Links}><i class="fas fa-wrench"></i></a>
        </li>
        <li>
          <a style={{...Links,color:"rgb(238,143,101)",backgroundColor:"#fff"}} class="is-active"><i class="fas fa-shopping-basket"></i></a>
        </li>
      </ul>
    </aside>
  );
};


export default Menu;
