import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>My Name is Zoe Sobowale</p>
      <a href="https://github.com/ZoeSobowale"> My GitHub</a>
      <br />
      <a href="https://www.linkedin.com/in/zoe-sobowale/">LinkedIn</a>
      <br />
      <a href="https://www.youtube.com/channel/UCmBRnQ77aZ2HIAjlY7NTTzQ">My Youtube</a>
      <br />
    </div>
    </>
  )
}

export default App
