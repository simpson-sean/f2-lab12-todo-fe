//import REACT components
import React, {Component } from "react";

//import REACT-ROUTER
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  //useParams
} from "react-router-dom";

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

//import APP Components.
import HomePage from "./HomePage.js";
import SignUpPage from "./SignUp.js";
import LoginPage from "./LoginPage.js";
import ToDo from "./ToDo.js";

const USER_KEY = 'TOKEN'

export default class App extends Component {

  state ={

    token: localStorage.getItem(USER_KEY)
  }
 

  render() {

    return (
      <Router>
        <div>
          <h2>Alchemy ToDo</h2>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/signin">Sign Up</Link></p>
          <p><Link to="/login">Login</Link></p>
          <p><Link to="/todo">To-Do List</Link></p>
          <Switch>
            <Route 
              path="/SignUpPage" 
              exact
              render={(routerProps) => <SignUpPage login={this.login} {...routerProps} />} 
            />
            <Route 
              path="/LoginPage" 
              exact
              render={(routerProps) => <LoginPage login={this.login} {...routerProps} />} 
            /> 
            <Route 
              path="/" 
              exact
              render={(routerProps) => <HomePage {...routerProps} />} 
            />  
              <Route 
              path="/ToDo" 
              exact
              render={(routerProps) => <ToDo {...routerProps} />} 
            />             
          </Switch>
        </div>
      </Router>
    );
  }
}

// class Child extends React.Component {
//   render() {

//     return (
//       <div>
//         <h3>ID: {props.match.params.myId}</h3>
//       </div>
//     );
//   }
// }
