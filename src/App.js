import React, { Component } from "react";
import "./App.scss";
import HomePage from "./homepage/homepage.component";
import Navigation from "./shared/navbar/navigation.component";
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import SignInAndSignUpPage from './sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from "react-redux";


class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/webshop" component={HomePage} />
            <Route exact path="/signin" render={() =>
              this.props.currentUser ?
                <Redirect to='/' /> :
                <SignInAndSignUpPage />} />
          </Switch>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
