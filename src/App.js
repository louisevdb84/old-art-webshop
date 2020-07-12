import React, { Component } from "react";
import "./App.scss";
import HomePage from "./homepage/homepage.component";
import Navigation from "./shared/navbar/navigation.component";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import SignInAndSignUpPage from './sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }    
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });     
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Navigation currentUser={this.state.currentUser}></Navigation>
        <Container>
          <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
              <Route path="/webshop" component={HomePage} />            
              <Route path="/signin" component={SignInAndSignUpPage} />         
          </Switch>
        </BrowserRouter>
        </Container>        
      </div>
    );
  }
}

export default App;
