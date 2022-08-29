import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Logo2 from '../../assets/images/Logo2.svg';

// import Facebook from '../../assets/images/Facebook.svg';

class FooterPage extends Component {
  render() {
    return (
      <div className="footer-page">
        <div className="footer_flx_0">
          <img className="logo" src={Logo2} alt="logo" />
          <div className="footer_flx_1">
            <label htmlFor="email">For any Query</label>
            <div className="input_wrapper">
              <input type="email" name="email" placeholder="Email Address" />
              <FontAwesomeIcon icon={faEnvelope} className="envelop" />
            </div>
          </div>
        </div>
        <div className="footer_flx_2">
          <div>
            <p>Blog</p>
            <p>Privacy</p>
            <p>Cookies</p>
          </div>
          <div>
            <div className="logos">
              <SocialIcon network="facebook" style={{ width: 30, height: 30, }} bgColor="#350079" />
              <SocialIcon network="instagram" style={{ width: 30, height: 30, }} bgColor="#350079" />
              <SocialIcon network="github" style={{ width: 30, height: 30, }} bgColor="#350079" />
            </div>
            <p>&copy; {new Date().getFullYear()} Sharanj - A Design Studio </p>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterPage;
