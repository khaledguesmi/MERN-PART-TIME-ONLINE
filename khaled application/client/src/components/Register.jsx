import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register = (props) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate('/mainbooks')
        }
    }, [localStorage])
    const [newUser, setNewUser] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })
    const [errors, setErrors] = useState([])
    const [errorObject, setErrorObject] = useState({})
    const createUser = (e) => {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/users/register", newUser, { withCredentials: true })
            .then(res => {
                console.log("✅✅✅✅Client Success ✅✅✅✅", res.data)
                setNewUser({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })
                navigate('/login')
            })
            .catch(err => {
                console.log("❌❌❌", err.response.data)
                setErrorObject(err.response.data)

            })
    }
    const goLogin = () => {
        navigate('/login')
    }
    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "rgb(89, 89, 145)" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-8 col-xl-6">
                        <div className="card rounded-3">
                            <img src="https://c4.wallpaperflare.com/wallpaper/975/24/883/the-sun-clouds-mountains-house-wallpaper-preview.jpg"
                                className="w-100"
                                style={{ borderTopLeftRadius: ".3rem", borderTopRightRadius: ".3rem" }}
                                alt="Sample photo" />
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Register</h3>
                                <form className="row g-3" onSubmit={createUser}>
                                    <div className="col-md-6">
                                        <label for="firstName" className="labelDecor">First Name</label>
                                        <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" onChange={e => setNewUser({ ...newUser, firstName: e.target.value })}
                                            value={newUser.firstName} />
                                        {errorObject.firstName ? <p className='text-danger'>{errorObject.firstName.message}</p> : ""}
                                    </div>
                                    <div className="col-md-6">
                                        <label for="lastName" className="labelDecor">Last Name</label>
                                        <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" onChange={e => setNewUser({ ...newUser, lastName: e.target.value })}
                                            value={newUser.lastName} />
                                        {errorObject.lastName ? <p className='text-danger'>{errorObject.lastName.message}</p> : ""}
                                    </div>
                                    <div className="col-12">
                                        <label for="emailInput" className="labelDecor">Enter Your Email</label>
                                        <input type="email" className="form-control" id="emailInput" placeholder="Enter Your Email" onChange={e => setNewUser({ ...newUser, email: e.target.value })}
                                            value={newUser.email} />
                                        {errorObject.email ? <p className='text-danger'>{errorObject.email.message}</p> : ""}
                                    </div>
                                    <div className="col-md-6">
                                        <label for="password1" className="labelDecor">Password</label>
                                        <input type="password" className="form-control" id="password1" placeholder="Enter your Password" onChange={e => setNewUser({ ...newUser, password: e.target.value })}
                                            value={newUser.password} />
                                        {errorObject.password ? <p className='text-danger'>{errorObject.password.message}</p> : ""}
                                    </div>
                                    <div className="col-md-6">
                                        <label for="password2" className="labelDecor">Comfirm Password</label>
                                        <input type="password" className="form-control" id="password2" placeholder="Confirm your Password" onChange={e => setNewUser({ ...newUser, confirmPassword: e.target.value })}
                                            value={newUser.confirmPassword} />
                                        {errorObject.confirmPassword ? <p className='text-danger'>{errorObject.confirmPassword.message}</p> : ""}
                                    </div>
                                    <div className="col-12">
                                        <button type='submit' className="btn btn-success btn-lg mb-1 me-2">Register</button>
                                        <button className='btn btn-secondary btn-lg mb-1' onClick={goLogin}>Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Register;