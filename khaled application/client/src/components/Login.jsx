import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
const Login = (props) => {
    const navigate = useNavigate()
    const [User, setUser] = useState({ email: "", password: "" })
    const [error, setError] = useState(null)
    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate('/mainbooks')
        }
    }, [localStorage])
    const loginUser = (e) => {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/users/login", User, { withCredentials: true })
            .then(res => {
                localStorage.setItem("token", res.data.userToken);
                setUser({ email: "", password: "" })
                setError(null);
                navigate('/mainbooks')
            })
            .catch(err => {
                setError("invalid credentials!")
            })
    }

    return (
        <div className='container'>
            <h1 id="h1">📖Login📖</h1>
            <hr />
            <div className='loginClass' >
                <form className="form-row" onSubmit={loginUser}>
                    <div className="form-group col-md-6">
                        <label for="emailInput" className="labelDecor">Enter Your Email</label>
                        <input className="form-control mb-3" placeholder="Enter your Email" type="email"
                            onChange={e => setUser({ ...User, email: e.target.value })}
                            value={User.email} />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="password1" className="labelDecor">Password</label>
                        <input type="password" className="form-control" placeholder="Enter your Password"
                            onChange={e => setUser({ ...User, password: e.target.value })}
                            value={User.password} />
                    </div>
                    <br />
                    {error && (
                        <span style={{ color: 'red' }}>{ }</span>
                    )}
                    <div className="form-group col-md-6">
                        <button className='btn btn-primary'>Login</button>

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <Link to='/'><button type="submit" className="btn btn-secondary">Register</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login