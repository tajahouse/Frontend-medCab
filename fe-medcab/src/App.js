import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginSignup from '../src/components/login-signup/login-signup';
import PrivateRoute from './components/PrivateRoute';
import UserPage from './components/User/UserPage';

import '../src/App.styles.scss'

function App() {
  return (
<Router>
   <div className="App">
     <div className="links">
       <a className="link" href='https://stoic-euler-9c6861.netlify.app/'>Home</a>
         <Link className="link" to="/">Login/Signup</Link>      
     </div>
  
     <Route exact path="/" component={LoginSignup}/>
      <PrivateRoute path="/protected" component={UserPage} />   
   </div>
</Router>

  
  );
}

export default App;
