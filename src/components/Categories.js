import React from "react";
import PElement from "./PElement"
import "../index.css"

function General() {
    return(
        <div className="formContainer">
            <h2>General Info</h2>
            <form>
                <div className="full-name-div">
                    <label for="full-name">Full Name</label>
                    <br></br>
                    <input id="full-name" className="info-input" type="text" placeholder="Your Full Name" required></input>
                    <PElement></PElement>
                </div>

                <div className="email-div">
                    <label for="email">E-mail</label>
                    <br></br>
                    <input id="email" className="info-input" type="email" placeholder="Your E-Mail" required></input>
                    <PElement></PElement>
                </div>

                <div className="phone-number-div">
                    <label for="phone-number">Phone Number</label>
                    <br></br>
                    <input id="phone-number" className="info-input" type="text" placeholder="Your Phone Number" required></input>
                    <PElement></PElement>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

function Education() {
    return( 
        <div className="formContainer">
             <h2>Education</h2>
                <form>
                    <div className="input-div">
                        <label htmlFor="institution">School/College</label>
                        <br></br>
                        <input className="info-input" id="institution" type="text" placeholder="Your Educational Institution" required/>
                        <PElement></PElement>
                    </div>
                    <div className="input-div">
                        <label htmlFor="degree">Degree</label>
                        <br></br>
                        <input className="info-input" id="degree" type="text" placeholder="Your Degree/Field of study" required />
                        <PElement></PElement>
                    </div>
                    <div className="input-div">
                        <label htmlFor="from">From</label>
                        <br></br>
                        <input className="info-input" id="from" type="date" required />
                        <PElement></PElement>
                    </div>
                    <div className="input-div">
                        <label htmlFor="to">To</label>
                        <br></br>
                        <input className="info-input" id="to" type="date" required />
                        <PElement></PElement>
                    </div>
                    <button type="submit">Submit</button>
                </form>
        </div>  
    )
}

function Experience() {
    return(
        <div className="formContainer">
            <h2>Work Experience</h2>
            <form>
                    <div className="input-div">
                        <label htmlFor="institution">Company Name</label>
                        <br></br>
                        <input className="info-input" id="institution" type="text" placeholder="Your Company Name" required />
                        <PElement></PElement>
                    </div>
                    <div className="input-div">
                        <label htmlFor="degree">Position Title</label>
                        <br></br>
                        <input className="info-input" id="degree" type="text" placeholder="Your Position Title" required />
                        <PElement></PElement>
                    </div>
                    <div className="input-div">
                        <label htmlFor="from">From</label>
                        <br></br>
                        <input className="info-input" id="from" type="date" required />
                        <PElement></PElement>
                    </div>
                    <div className="input-div">
                        <label htmlFor="to">To</label>
                        <br></br>
                        <input className="info-input" id="to" type="date" required />
                        <PElement></PElement>
                    </div>
                    <button type="submit">Submit</button>
                </form>
        </div>
    )
}

export { General, Education, Experience }