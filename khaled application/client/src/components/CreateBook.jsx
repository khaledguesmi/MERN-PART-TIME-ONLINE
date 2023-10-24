import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const CreateBook = () => {
    document.cookie = `userToken=${localStorage.getItem("token")}; path=/`;
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState({});
    useEffect(() => {

    }, [])
    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/books', { title, description }, {
            headers: {
                Authorization: Cookies.get("userToken")
            }
        })
            .then(res => {
                console.log(res.data)
                navigate('/mainbooks')
            }
            )
            .catch(err => {
                console.log(err.response.data.message);
                const errorResponse = err.response.data.errors;
                // Define a temp error array to push the messages in
                const errorObj = {};
                // Loop through all errors and get the messages
                for (const key of Object.keys(errorResponse)) {
                    errorObj[key] = errorResponse[key].message;
                }
                // Set Errors
                setErrors(errorObj);

            })
    }

    return (
        <div className='principal'>
            <h1  id="h1">Add a new book:</h1>
            <center><form className="form-row" onSubmit={handleSubmit}>
                <div className="form-group col-md-6" style={{ marginBottom: "20px" }}>
                    <label>Title:</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <p style={{ color: "red" }}>{errors.name}</p>
                </div>
                <div className="form-group col-md-6" style={{ marginBottom: "20px" }}>
                    <label>Description:</label>
                    <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <p style={{ color: "red" }}>{errors.name}</p>
                </div>
                <div className="form-group col-md-6" style={{ marginBottom: "20px" }}>
                    <button type="submit" className="btn btn-success">Add book</button>&nbsp; &nbsp; &nbsp;
                    <Link to='/mainbooks'><button type="submit" className="btn btn-primary">Cancel</button></Link>
                </div>

            </form>
            </center>
        </div>


    )
}

export default CreateBook