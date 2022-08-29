import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/Logo.svg';
import Menu from '../../assets/images/Menu.svg';

class NavBar extends Component {
  // constructor() {
  //   super();
  //   this.state = { data: true, };
  // }

  // getMenu = () => {
  //   if (data) {
  //     return {
  //       display: block
  //     }
  //   } else {
  //     return {
  //       display: none
  //     }
  //   }
  // };

  render() {
    return (
      <div className="navBar_page">
        <img className="logo" src={Logo} alt="logo" />
        <div className="links">
          <NavLink activeClassName="active_link" className="link" to="/">HOME</NavLink>
          <NavLink activeClassName="active_link" className="link" to="/services">SERVICES</NavLink>
          <NavLink activeClassName="active_link" className="link" to="/projects">PROJECTS</NavLink>
          <NavLink activeClassName="active_link" className="link" to="/contact us">CONTACT US</NavLink>
        </div>
        <img className="menu" src={Menu} alt="this is menu" />
      </div>
    );
  }
}

export default NavBar;
