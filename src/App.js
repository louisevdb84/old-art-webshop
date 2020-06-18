import React, { Component } from "react";
import "./App.scss";
import HomePage from "./homepage/homepage.component";
import Navigation from "./shared/navbar/navigation.component";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <Container>
          <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/webshop" component={HomePage} />            
          </Switch>
        </BrowserRouter>
        </Container>        
      </div>
    );
  }
}

export default App;
