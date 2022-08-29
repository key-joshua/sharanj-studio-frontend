import React, { Component } from 'react';
import FooterPage from './footerPage';
import NavBar from './NavBarPage';

class ContactPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>This is our contact page</h1>
        <FooterPage />
      </div>
    );
  }
}

export default ContactPage;
