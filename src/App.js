import './App.css';
import React, { Component } from 'react'
import General from "./components/General"
import Education from "./components/Education"
import Experience from './components/Experience';

class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="App">
            <div className="header">
              <h1>CV Builder</h1>
              </div>
              <div className="main">
                <General/>
                <Education/>
                <Experience/>
              </div>
            </div>
        )
    }
}

export default App



