import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';

function App() {
    return (
      <Router>
        <div>
            <Routes>
                <Route exact path="/" Component={Home} />
                <Route path="/projects" Component={Projects} />
            </Routes>
        </div>
      </Router>
    );
  }
export default App
