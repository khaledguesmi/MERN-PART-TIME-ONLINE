import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
const EditProduct = () => {

    const { id } = useParams()

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const NavToPage = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)

            .then(res => {
                const { title, price, description } = res.data
                console.log(res.data)
                setTitle(title)
                setPrice(price)
                setDescription(description)
   
            })
            .catch(err => {
                console.log("🚩🚩🚩❌❌❌❌", err)
            })
    }, [id])

    const updateHandler = (e) => {
        e.preventDefault()
        const newObj = {
            title,
            price,
            description
        }
        axios.put(`http://localhost:5000/api/products/${id}`, newObj)
            .then(res => {
                console.log("your Product is added successfully ✅✅")
                NavToPage("/")
                
            })
            .catch(err => {
                console.log(err)
            })
    }

  return (
    <div className="formCreate d-block mb-3">
            <form onSubmit={updateHandler}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} value={title}/>
                    <label>Title</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" onChange={(e) => setPrice(e.target.value)} value={price}/>
                    <label>Price</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea  className="form-control" onChange={(e) => setDescription(e.target.value)} value={description}/>
                    <label>Description</label>
                </div>
                <Link to={"/"}><button type="button" className="btn btn-secondary me-2"> Back </button></Link>
                <button type="submit" className="btn btn-primary">Save Change</button><hr/>

            </form>
        </div>
  )
}

export default EditProduct