import React, { Component } from 'react';
import FooterPage from './footerPage';
import NavBar from './NavBarPage';

class ServicesPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>This is our services page</h1>
        <FooterPage />
      </div>
    );
  }
}

export default ServicesPage;
