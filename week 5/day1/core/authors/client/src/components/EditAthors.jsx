import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
const EditAthors = () => {

    const { id } = useParams()

    const [title, setTitle] = useState("");

    const Nav = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:5000/api/authors/${id}`)

            .then(res => {
                const { title } = res.data
                console.log(res.data)
                setTitle(title)
   
            })
            .catch(err => {
                console.log("🚩🚩🚩❌❌❌❌", err)
            })
    }, [id])

    const updateHandler = (e) => {
        e.preventDefault()
        const newObj = {
            title
        }
        axios.put(`http://localhost:5000/api/authors/${id}`, newObj)
            .then(res => {
                console.log("your authors is added successfully ✅✅")
                Nav("/")
                
            })
            .catch(err => {
                console.log(err)
            })
    }

  return (

    <div>
        EditAthors
        <form onSubmit={updateHandler}>
                    <div className="form-floating mb-3">
                        <label>Name :</label>
                        <br />
                        <br />
                        <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)}  value={title}/>
                    </div>
                    <Link to={"/"}><button className="btn btn-secondary me-3">Cancel </button></Link>
                    <button type="submit" className="btn btn-primary">Submit </button>
                </form>
    </div>
  )
}

export default EditAthors