import React, { useState } from 'react'
import General from "./components/General"
import Education from "./components/Education"
import Experience from "./components/Experience"

const App = () => {
  const [data, setData] = useState({
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
  })
  
  /*const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [schoolName, setSchoolName] = useState();
  const [titleOfStudy, setTitleOfStudy] = useState();
  const [studyFrom, setStudyFrom] = useState();
  const [studyTo, setStudyTo] = useState();
  const [workPlace, setWorkPlace] = useState();
  const [position, setPosition] = useState();
  const [workFrom, setWorkFrom] = useState();
  const [workTo, setWorkTo] = useState(); */
  

  const handleSubmit = (event) => {
    event.preventDefault();
    setData({isSubmitted: !data.isSubmitted})
    //this.setState({ isSubmitted: !this.state.isSubmitted});
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    console.log(name, value);
    setData({
      [name]: value
    })
    //this.setState({
    //  [name]: value
    //})
  }

  return (
      <div className="container">
        <header>
          <h1>CV Builder</h1>
        </header>
        <div className="forms">
          <General handleSubmit={handleSubmit} handleChange={handleChange} data={data}/>
          <Education handleSubmit={handleSubmit} handleChange={handleChange} data={data}/>
          <Experience handleSubmit={handleSubmit} handleChange={handleChange} data={data}/>
        </div>
      </div>
    )
 }

export default App



