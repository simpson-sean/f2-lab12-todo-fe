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

//import APP Components.
import HomePage from "./HomePage.js";
import SignUpPage from "./SignUpPage.js";
import LoginPage from "./LoginPage.js";
import ToDoPage from "./ToDoPage.js";

const USER_KEY = 'TOKEN'

export default class App extends Component {

  state ={

    token: localStorage.getItem(USER_KEY)
  };
 
  login = (userToken) => {  
    this.setState({ token: userToken })
    localStorage.setItem('USER_KEY', userToken)
  
  };

  logout = () => {
    this.setState({ token: ''})
    localStorage.setItem('TOKEN', '')

  };



  render() {
    //console.log(this.state);
    return (
      <Router>
        <div>
          <h2>Alchemy ToDo</h2>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/signup">Sign Up</Link></p>
          <p><Link to="/login">Login</Link></p>
          <p><Link to="/todo">To-Do List</Link></p>
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <HomePage {...routerProps} />} 
            />
            <Route 
              path="/signup" 
              exact
              render={(routerProps) => <SignUpPage login={this.login} {...routerProps} />} 
            />  
            <Route 
              path="/login" 
              exact
              render={(routerProps) => <LoginPage login={this.login} {...routerProps} />} 
            />           
              <Route 
              path="/todo" 
              exact
              render={(routerProps) => <ToDoPage {...routerProps} token={this.state.token}/>} 
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
