import {React, useState} from 'react'
import axios from 'axios'

const CreateProduct = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setdescription] = useState("");
    const {refresh} = props


    const [errors, setErrors] = useState([]);
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/products/", {
            title,
            price,
            description 
        })
        .then((res) => {
            console.log(res)
            console.log(res.data)
            setTitle("")       
            setPrice(0)        
            setdescription("")
            refresh() 
        })
        .catch((err) => {
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
            console.log("This is our error : ",err)
        })                      
    }


  return (

    <div className="formCreate d-block mb-3"> 
        {errors.map((err, index) => <div className="p-3 text-primary-emphasis bg-danger-subtle border border-danger-subtle rounded-3" key={index}>{err}</div> )}
            <form onSubmit={submitHandler}>
            
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)}/>
                    <label>Title</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" onChange={(e) => setPrice(e.target.value)}/>
                    <label>Price</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea  className="form-control" onChange={(e) => setdescription(e.target.value)}/>
                    <label>Description</label>
                </div>
                <button type="submit" className="btn btn-primary">Create Product</button>
                
            </form>
        </div>
  )
}

export default CreateProduct