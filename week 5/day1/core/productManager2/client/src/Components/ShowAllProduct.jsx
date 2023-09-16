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

  return (

    <div className="d-block mt-3">

        {productList.map((productShow,idx) => 

        {
                return <div className=" alert alert-info" key={idx}>
                    <Link to={"/api/products/" + productShow._id}>{productShow.title} </Link >
                </div>

            } )}
     
    </div>
  )
}

export default ShowAllProduct