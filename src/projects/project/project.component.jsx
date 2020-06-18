import React, { Component } from 'react';
import projects from '../../shared/projects';
import '../project/project.styles.scss';
import {Card} from 'react-bootstrap';

class Project extends Component {
  render() {
    return (        
      <div id="project">
        <Card>
                <br></br>
              <h1>My Projects</h1>              
              <br></br>
              <div className="gallery"> 
                  {projects.map((item, key) => (
                      <div class="container">
                          <p class="middle">
                              <div class="text">{item.description}</div>
                        </p>
                        <img className="projectimage" src={item.image}></img>                    
                          <div class="title">
                              <p class="text">{item.name}</p>
                        </div>
                    </div>
                
            ))}     
            
      </div>
        </Card>
    </div>
        
    );
  }
}

export default Project;