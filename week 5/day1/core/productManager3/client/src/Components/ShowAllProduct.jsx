import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const ShowAllProduct = () => {

    const [productList,setProductList] = useState([])
    

    useEffect(()=> {
        axios.get("http://localhost:5000/api/products/")
        .then((res) => {
            console.log(res.data)
            setProductList(res.data.allProducts)
        })
        .catch((err) => { console.log(err) })
    }, [])
    
    const deleteProduct = (id) =>  {
        axios.delete(`http://localhost:5000/api/products/${id}`)
        .then (res => {
            console.log("deleted")
    
            const filteredProduct = productList.filter((eachProduct) => {
                if (eachProduct._id === id) {
                    return false
                } else {
                    return true
    
                }
                
            })
            setProductList(filteredProduct)
        })
        .catch (err => {
            console.log(err)
        })
     }

  return (

    <div className="d-block mt-3">

        {productList.map((productShow,idx) => 

        {
                return (
                <div className=" alert alert-info" key={idx}>
                    <Link to={"/api/products/" + productShow._id}>{productShow.title} </Link >
                    <Link to={"/api/products/edit/" + productShow._id}><button type="button" className="btn btn-primary ms-3">Edit</button></Link>
                    <button type="button" className="btn btn-danger ms-3" onClick={()=> deleteProduct(productShow._id)}>Delete</button>
                </div>
                )

            } )}
     
    </div>
  )
}

export default ShowAllProduct