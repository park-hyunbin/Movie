import React from 'react';
import Home from './routes/Home';
import Detail from './routes/Detail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';  

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="container">
        <Switch>
          <Route path="/movie/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <footer className="footer">
        &copy; 2024 Movie App. All rights reserved.
      </footer>
    </Router>
  );
}

export default App;
