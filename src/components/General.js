import React, { Component } from "react";
import "../App.css"

class General extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="general">
                <h2>General Info</h2>
                <form>
                    <div className="input-div">
                        <label htmlFor="full-name">Full Name</label>
                        <br></br>
                        <input className="info-input" id="full-name" type="text" placeholder="Your Full Name" />
                    </div>
                    <div className="input-div">
                        <label htmlFor="email">E-Mail</label>
                        <br></br>
                        <input className="info-input" id="email" type="email" placeholder="Your E-Mail" />
                    </div>
                    <div className="input-div">
                        <label htmlFor="phone">Phone Number</label>
                        <br></br>
                        <input className="info-input" id="phone" type="text" placeholder="Your Phone Number" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default General;