import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';

const CreateAuthors = () => {
    const [title, setTitle] = useState("");

    const nav = useNavigate()

    const [errors, setErrors] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/authors/", {
            title
        })
            .then((res) => {
                console.log(res)
                console.log(res.data)
                setTitle("")
                nav("/")

            })
            .catch((err) => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data

                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
                console.log("This is our error : ", err)
            })
    }
    return (
        <div>
            CreateAuthors
            <div className="formCreate d-block mb-3">
                {errors.map((err, index) => <div className="p-3 text-primary-emphasis bg-danger-subtle border border-danger-subtle rounded-3" key={index}>{err}</div>)}
                <form onSubmit={submitHandler}>
                    <div className="form-floating mb-3">
                        <label>Name :</label>
                        <br />
                        <br />
                        <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <Link to={"/"}><button className="btn btn-secondary me-3">Cancel </button></Link>
                    <button type="submit" className="btn btn-primary">Submit </button>
                </form>
            </div>
        </div>
    )
}
export default CreateAuthors