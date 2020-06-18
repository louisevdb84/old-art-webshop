import React, { Component } from 'react';
import './homepage.style.scss';
import ImageCarousel from './carousel/carousel.component';
import About from '../about/about.component';
import Project from '../projects/project/project.component';
import Contact from '../contact/contact.component';

class HomePage extends Component {
  render() {
    return (
      <div id="homepage" className="homepage">       
        <div className="background"></div>
        <div className="mainheading">            
          <h1>The Art Page</h1>          
          <br></br>
          <h3>Browse and make an online purchase</h3>
          <br>
          </br>

          <ImageCarousel></ImageCarousel>          
        </div>        
        <div>
          <About></About>
        </div>
        <div>
          <Project></Project>
        </div>
          <div>
          <Contact></Contact>
        </div>
      </div>
    );
  }
}

export default HomePage;
