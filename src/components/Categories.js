import React from "react";
import "../index.css"

function General() {
    return(
        <div className="formContainer">
            <h2>General Info</h2>
            <form>
                <div className="full-name-div">
                    <label for="full-name">Full Name</label>
                    <br></br>
                    <input id="full-name" className="info-input" type="text" placeholder="Your Full Name"></input>
                </div>

                <div className="email-div">
                    <label for="full-name">E-mail</label>
                    <br></br>
                    <input id="full-name" className="info-input" type="email" placeholder="Your E-Mail"></input>
                </div>

                <div className="phone-number-div">
                    <label for="full-name">Phone Number</label>
                    <br></br>
                    <input id="full-name" className="info-input" type="text" placeholder="Your Phone Number"></input>
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
                        <input className="info-input" id="institution" type="text" placeholder="Your Educational Institution" />
                    </div>
                    <div className="input-div">
                        <label htmlFor="degree">Degree</label>
                        <br></br>
                        <input className="info-input" id="degree" type="text" placeholder="Your Degree/Field of study" />
                    </div>
                    <div className="input-div">
                        <label htmlFor="from">From</label>
                        <br></br>
                        <input className="info-input" id="from" type="date" />
                    </div>
                    <div className="input-div">
                        <label htmlFor="to">To</label>
                        <br></br>
                        <input className="info-input" id="to" type="date" />
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
                        <input className="info-input" id="institution" type="text" placeholder="Your Company Name" />
                    </div>
                    <div className="input-div">
                        <label htmlFor="degree">Position Title</label>
                        <br></br>
                        <input className="info-input" id="degree" type="text" placeholder="Your Position Title" />
                    </div>
                    <div className="input-div">
                        <label htmlFor="from">From</label>
                        <br></br>
                        <input className="info-input" id="from" type="date" />
                    </div>
                    <div className="input-div">
                        <label htmlFor="to">To</label>
                        <br></br>
                        <input className="info-input" id="to" type="date" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
        </div>
    )
}

export { General, Education, Experience }