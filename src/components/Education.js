import React, { Component } from "react";
import "../App.css"

class Education extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="education">
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
}

export default Education;