import React from "react"

function General(props) {
    return (
        <div className="formContainer" onSubmit={props.handleSubmit}>
            <h2>General Info</h2>
            <form>
                <div className="full-name-div">
                    <label for="full-name">Full Name</label>
                    <br></br>
                    {props.data.isSubmitted === false ? 
                    <input
                        name="fullName"
                        className="info-input" 
                        type="text" 
                        placeholder="Your Full Name" 
                        onChange={props.handleChange}
                        value={props.data.fullName}
                        required 
                    />
                    : <p>{props.data.fullName}</p>}
                    

                </div>

                <div className="email-div">
                    <label for="email">E-mail</label>
                    <br></br>
                    {props.data.isSubmitted === false ?
                    <input
                        name="email" 
                        className="info-input" 
                        type="email" 
                        placeholder="Your E-Mail"
                        onChange={props.handleChange}
                        value={props.data.email}
                        required 
                    />
                    : <p>{props.data.email}</p>}
                    

                </div>

                <div className="phone-number-div">
                    <label for="phone-number">Phone Number</label>
                    <br></br>
                    {props.data.isSubmitted === false ?
                    <input 
                        name="phoneNumber" 
                        className="info-input" 
                        type="text" 
                        placeholder="Your Phone Number"
                        onChange={props.handleChange}
                        value={props.data.phoneNumber} 
                        required 
                    />
                    : <p>{props.data.phoneNumber}</p>}
                    
                </div>
            </form>
        </div>
    )
}

export default General;