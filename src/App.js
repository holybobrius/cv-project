import React from 'react'
import { General, Education, Experience } from "./components/Categories"

function App() {
  return (
    <div className="container">
      <header>
        <h1>CV Builder</h1>
      </header>
      <div className="forms">
        <General></General>
        <Education></Education>
        <Experience></Experience>
      </div>
    </div>
  )
}

export default App



