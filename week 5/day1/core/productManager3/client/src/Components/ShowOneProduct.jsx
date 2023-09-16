import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ShowOneProduct = () => {

    const { id } = useParams()

    const [oneProduct, setOneProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
        .then(res => {
                console.log(res.data)
                setOneProduct(res.data)
            })
        .catch(err => {
                console.log("❌❌❌❌", err)
            })

    }, [id])


  return (
        <div>
            <div className="alert alert-danger">Title : {oneProduct.title}</div>
            <div className="alert alert-danger">Price : {oneProduct.price}</div>
            <div className="alert alert-danger">Description : {oneProduct.description}</div>
            <Link to={"/"}><button type="button" className="btn btn-secondary me-2"> Back </button></Link>
        </div>
  )
}

export default ShowOneProduct