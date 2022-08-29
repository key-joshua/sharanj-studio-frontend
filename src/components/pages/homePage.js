/* eslint-disable jsx-a11y/media-has-caption */
import React, { Component } from 'react';

import NavBar from './NavBarPage';
import FooterPage from './footerPage';
import Group from '../../assets/images/Group.svg';
import Card from './Card';
import video from '../../assets/videos/video.mp4';
import Rectangle from '../../assets/images/Rectangle.svg';
import Rectangle1 from '../../assets/images/Rectangle1.svg';
// import Innovation from '../../assets/images/Innovation.svg';
import Iteration from '../../assets/images/Iteration.svg';
import Realtime from '../../assets/images/Realtime.svg';

class HomePage extends Component {
  render() {
    return (
      <div className="home_container">
        <NavBar className="styles" props={this.props} />
        <div className="home-page">
          <h1 className="title">CONVERTING  <span>IDEAS</span> INTO <br /><span>REALITY</span></h1>
          <div className="grid">
            <div className="main">
              <p>
                a creative, research-based design agency that provides services for the complete branding of a company.
              </p>
              <button type="button">LET&apos;S DISCUSS</button>
            </div>
            <img src={Group} alt="group" />
          </div>
        </div>
        <div className="video_background">
          <video className="video" controls>
            <source src={video} type="video/mp4" />
            <source src="forrest_gump.ogg" type="video/ogg" />
            <track src="fgsubtitles_en.vtt" kind="subtitles" label="English" />
            <track src="fgsubtitles_no.vtt" kind="subtitles" label="Norwegian" />
          </video>
        </div>
        <h1 className="title_1">OUR SERVICES</h1>
        <div className="contain">
          <div className="flex_1">
            <p className="title_4">research</p>
            <p>User Interviews and Surveys<br /> Empathy Generation<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pain Points <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Empathy Maps <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Storyboards <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User Personas<br /> Competitive Audits <br />Trend Analysis <br />Heuristic Analysis<br /> Brainstorming<br /> User Flow Generation <br />Information Architecture <br />Usability Testing</p>
            <div className="rotation" />
          </div>
          <div className="flex_2">
            <p className="title_4">design</p>
            <p>Design Analysis<br /> Brand Development<br /> UX Design<br /> Typography,<br /> Iconography &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;& <br />Illustrations<br /> Paper&nbsp;&nbsp;&nbsp;&nbsp; Sketches&nbsp;&nbsp;&nbsp;&nbsp; &<br /> Digital Wireframes<br /> UI Design<br /> Motion Graphics <br />Digital Prototype</p>
            <div className="rotation" />
          </div>
          <div className="flex_3">
            <p className="title_4">development</p>
            <p>Website<br /> Android <br />IOS</p>
          </div>
        </div>
        <p className="btn">Learn More About Our Services</p>
        <div className="cards_container">
          <h1 className="title_2">RECENT INNOVATIONS</h1>
          <div className="grid_container">
            <Card />
            <Card />
            <Card />
          </div>
          <p className="btn_1">We have more works to show.<span className="underline">LETS EXPLORE</span></p>
        </div>
        <div className="container">
          <h1 className="title_3">What makes<br /> us unique?</h1>
          <p className="text">Well, according to our thus-far observation, Sharanj Studios stands out among its competitions due to same of it&apos;s significant features.</p>
          <div className="flx_c">
            <div className="flx_1">
              <p>Affordability</p>
              <p>First of all, our affordability; Sharanj Studios always aims towards providing client-satisfactory and quality services within an affordable and value-for-money budget range. Our teams tends to provide premium, top match services through our collective team efforts and extensive research based on demands  of client.</p>
            </div>
            <div className="flx_2">
              <p>Improvising and Optimistic Approach</p>
              <p>Furthermore, our focus is to always be with client along the process, keeping necessities and requirements in sights and under consideration, till the completion of the proceedings and throughout feedback period as well.</p>
            </div>
            <div className="flx_3">
              <p>HOW OUR TEAM COLLABORATE</p>
              <img src={Rectangle} alt="rectangle one group" />
            </div>
          </div>
          <div className="flx_c flex_c">
            <div className="flx_1">
              <p>Versatility</p>
              <p>Additionally, one of the salient features of Sharanj is its versatility we envision providing flexible and fulfilling services for all the types of businesses. We have a vast number of services of that can cater to varying demand of the market, yet are customizable according precise requirements of clients.</p>
            </div>
            <div className="flx_2">
              <p>Costumer Satisfaction</p>
              <p>Even after early access, we will not lag behind. Our Studio will target to launch the second and revised version based an the review insights and feedback recieved which will henceforth improvise its over leaked nuances, and essentiality for smooth and steady future endeavor</p>
            </div>
            <div className="flx_3">
              <p>our product development cycle</p>
              <img src={Rectangle1} alt="rectangle one group" />
            </div>
          </div>
        </div>
        <div className="section">
          <h1>Wanna Create Something New</h1>
          <p className="tittle">LET’S DO IT TOGETHER !!</p>
          <button type="button">LET&apos;S DISCUSS</button>
          <div className="flxContainer">
            <div>
              <img src={Realtime} alt="innovation" />
              <p>INNOVATION</p>
            </div>
            <div>
              <img src={Iteration} alt="innovation" />
              <p>ITERATION</p>
            </div>
            <div>
              <img src={Realtime} alt="innovation" />
              <p>REAL TIME TEST</p>
            </div>
          </div>
        </div>
        <FooterPage />
      </div>
    );
  }
}

export default HomePage;
