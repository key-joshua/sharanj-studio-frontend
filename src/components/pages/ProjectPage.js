import React, { Component } from 'react';
import FooterPage from './footerPage';
import NavBar from './NavBarPage';

class ProjectPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>This is our project page</h1>
        <FooterPage />
      </div>
    );
  }
}

export default ProjectPage;
