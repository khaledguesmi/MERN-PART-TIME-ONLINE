import React, { useState } from "react";

 const Form = (props) => {
    // initialize state for all form elements
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    return (
        <div >
            <form className="center" onSubmit={() => {}}>
                {/* render form elements and set states on input change */}
                
                








                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">First Name:</span>
                        <input className="form-control" onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                {setFirstName.length < 2 && setFirstName.length > 0 ? (
                    <p>First Name must be at least 2 characters</p>
                    ) : null}










                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">Last Name:</span>
                        <input className="form-control" onChange={(e) => setLastName(e.target.value)}/>     
                </div>
                {setLastName.length < 2 && setLastName.length > 0 ? (
                    <p>Last Name must be at least 2 characters</p>
                    ) : null}


                







                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">Email:</span>
                        <input className="form-control" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                {setEmail.length < 2 && setEmail.length > 0 ? (
                    <p>Email must be at least 2 characters</p>
                    ) : null}





                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">Password:</span>
                        <input  className="form-control" type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                {setPassword.length < 2 && setPassword.length > 0 ? (
                    <p>Password must be at least 2 characters</p>
                    ) : null}





                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">confirmPassword:</span>
                        <input  className="form-control" type="password" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
                {setConfirmPassword.length < 2 && setConfirmPassword.length > 0 ? (
                    <p>ConfirmPassword must be at least 2 characters</p>
                    ) : null}


            </form>

            {/* render state variables */}
            <fieldset>
                <h1>Your Form Data</h1>
                <p>First Name : {firstName}</p>
                <p>Last Name : {lastName}</p>
                <p>Email : {email}</p>
                <p>Password : {password}</p>
                <p>Confirm Password : {confirmPassword}</p>
            </fieldset>
        </div>
    );
};
export default Form;