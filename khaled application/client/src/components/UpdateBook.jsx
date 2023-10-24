import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateBook = () => {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [errors, setErrors] = useState({});
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/books/${id}`)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title)
                setDescription(res.data.description)
            })
            .catch(err => console.log(err))
    }, [id])

    const CancelEdit=() => {
        navigate("/mainbooks")
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://127.0.0.1:8000/api/books/' + id, { title, description })
            .then(() => {
                navigate('/mainbooks')
            })
            .catch(err => {
                console.log(err.response.data.message);
                const errorResponse = err.response.data.errors;
                const errorObj = {}; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorObj[key] = errorResponse[key].message;
                }
                // Set Errors
                setErrors(errorObj);

            })
    }


    return (
        <div className='principal'>
            <h1 id="h1">Edit this book:</h1>
            <center><form className="form-row"onSubmit={handleUpdate}>
            <div className="form-group col-md-6" style={{marginBottom: "20px"}}>
                        <label>Title:</label>
                        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <p style={{ color: "red" }}>{errors.name}</p>
                        </div>
                        <div className="form-group col-md-6" style={{marginBottom: "20px"}}>
                        <label>Description:</label>
                        <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
                        <p style={{ color: "red" }}>{errors.name}</p>
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>&nbsp; &nbsp; &nbsp;
                        <button type="submit" className="btn btn-primary" onClick={CancelEdit}>Cancel</button>
                    </form>
                    </center>
                </div>
    )
}

export default UpdateBook