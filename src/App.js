import React from 'react'
import General from "./components/General"
import Education from "./components/Education"
import Experience from "./components/Experience"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isSubmitted: false,
      fullName: "",
      email: "",
      phoneNumber: "",
      schoolName: "",
      titleOfStudy: "",
      studyFrom: "",
      studyTo: "",
      workPlace: "",
      position: "",
      workFrom: "",
      workTo: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isSubmitted: !this.state.isSubmitted});
  }

  handleChange(event) {
    const {name, value} = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    })
  }

  render(){
    return (
        <div className="container">
          <header>
            <h1>CV Builder</h1>
          </header>
          <div className="forms">
            <General handleSubmit={this.handleSubmit} handleChange={this.handleChange} data={this.state}/>
            <Education handleSubmit={this.handleSubmit} handleChange={this.handleChange} data={this.state}/>
            <Experience handleSubmit={this.handleSubmit} handleChange={this.handleChange} data={this.state}/>
          </div>
        </div>
      )
  }
}

export default App



