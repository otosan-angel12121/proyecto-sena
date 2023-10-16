import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/welcome">
          <div className="welcome-page">
            <h2>Bienvenido</h2>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;