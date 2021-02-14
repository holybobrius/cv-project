import React from "react"

function Experience(props) {
    let buttonText = props.data.isSubmitted ? "Edit" : "Submit";
    return(
        <div className="formContainer">
            <h2>Work Experience</h2>
            <form onSubmit={props.handleSubmit}>
                    <div className="input-div">
                        <label htmlFor="institution">Company Name</label>
                        <br></br>
                        {props.data.isSubmitted === false ? 
                            <input 
                                name="workPlace" 
                                className="info-input"  
                                type="text" 
                                placeholder="Your Company Name" 
                                onChange={props.handleChange} 
                                value={props.data.workPlace}
                                />
                            : <p>{props.data.workPlace}</p>
                        }
                    </div>
                    <div className="input-div">
                        <label>Position Title</label>
                        <br></br>
                        {props.data.isSubmitted === false ? 
                            <input 
                                className="info-input"
                                name="position"
                                type="text" 
                                placeholder="Your Position Title"
                                onChange={props.handleChange} 
                                value={props.data.position}
                            />
                            : <p>{props.data.position}</p>
                        }
                    </div>
                    <div className="input-div">
                        <label htmlFor="from">From</label>
                        <br></br>
                        {props.data.isSubmitted === false ? 
                            <input
                                name="workFrom"
                                className="info-input" 
                                type="date"
                                onChange={props.handleChange} 
                                value={props.data.workFrom}
                            />
                            : <p>{props.data.workFrom}</p>
                        }
                    </div>
                    <div className="input-div">
                        <label htmlFor="to">To</label>
                        <br></br>
                        {props.data.isSubmitted === false ? 
                            <input 
                                name="workTo"
                                className="info-input" 
                                type="date"
                                onChange={props.handleChange} 
                                value={props.data.workTo}
                            />
                            : <p>{props.data.workTo}</p>
                        }         
                    </div>
                    <button type="submit">{buttonText}</button>
                </form>
        </div>
    )
}

export default Experience