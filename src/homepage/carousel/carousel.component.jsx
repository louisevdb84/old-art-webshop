import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carousel.styles.scss';
import projects from  '../../shared/projects';

class ImageCarousel extends Component {
     onChange = () => {
         console.log("change");
     }
     onClickItem = () => {
         console.log("click");
     }
     onClickThumb = () => {
         console.log("Thumb");
    }
    
    render() {
      
        return (
            <Carousel width="80%" className="carousel" infiniteLoop={true} autoPlay={true} showArrows={true} onChange={this.onChange} onClickItem={this.onClickItem} onClickThumb={this.onClickThumb}>
                {projects.map((item, key) => (
                    <div key={key}>
                        <img src={item.image}></img>
                    </div>
                ))}             
            </Carousel>
        );
    }
};

export default ImageCarousel;