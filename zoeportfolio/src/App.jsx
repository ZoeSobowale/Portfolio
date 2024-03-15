import { useState } from 'react'
import './App.css'

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
