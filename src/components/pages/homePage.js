import React, { Component } from 'react';

import NavBar from './navBarPage';
import FooterPage from './footerPage';

class HomePage extends Component {
  render() {
    return (
      <div>

        <NavBar props={this.props} />

        <div className="home-page">

          <div className="container">Home Page</div>

        </div>

        <FooterPage />

      </div>

    );
  }
}

export default HomePage;
