import React, { Component } from "react";
import "../App.css"

class Experience extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="education">
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
}

export default Experience;