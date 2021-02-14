import React from "react"

function Education(props) {
    return(
        <div className="formContainer" onSubmit={props.handleSubmit}>
             <h2>Education</h2>
                <form>
                    <div className="input-div">
                        <label htmlFor="institution">School/College</label>
                        <br></br>
                        {props.data.isSubmitted === false ? 
                        <input 
                            className="info-input" 
                            name="schoolName" 
                            type="text" 
                            placeholder="Your Educational Institution"
                            onChange={props.handleChange}
                            value={props.data.schoolName} 
                            required
                        />
                        : <p>{props.data.schoolName}</p>}
                        
                    </div>
                    <div className="input-div">
                        <label htmlFor="degree">Degree</label>
                        <br></br>
                        {props.data.isSubmitted === false ? 
                        <input 
                            className="info-input" 
                            name="titleOfStudy" 
                            type="text" 
                            placeholder="Your Degree/Field of study"
                            onChange={props.handleChange}
                            value={props.data.titleOfStudy} 
                            required />
                        : <p>{props.data.titleOfStudy}</p>}
                        
                    </div>
                    <div className="input-div">
                        <label htmlFor="from">From</label>
                        <br></br>
                        {props.data.isSubmitted === false ? 
                        <input 
                            className="info-input" 
                            name="studyFrom" 
                            type="date"
                            onChange={props.handleChange}
                            value={props.data.studyFrom}  
                            required />
                        : <p>{props.data.studyFrom}</p>}
                        
                    </div>
                    <div className="input-div">
                        <label htmlFor="to">To</label>
                        <br></br>
                        {props.data.isSubmitted === false ? 
                        <input 
                            className="info-input" 
                            name="studyTo" 
                            type="date"
                            onChange={props.handleChange}
                            value={props.data.studyTo}   
                            required />
                        : <p>{props.data.studyTo}</p>}
                    </div>
                </form>
        </div>
    )
}

export default Education