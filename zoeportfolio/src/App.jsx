import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </div>
      </Router>
    );
  }
export default App
