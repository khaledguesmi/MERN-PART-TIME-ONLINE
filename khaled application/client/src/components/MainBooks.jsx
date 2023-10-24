import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import BooksList from './BooksList';
import cookies from "js-cookie"


const MainBooks = (props) => {
  const [books, setBooks] = useState([])
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [connectedUser, setConnectedUser] = useState(null);
  const fetchConnectedUser = async () => {
    try {
      const authenticated = await axios.get("http://localhost:8000/api/users/getLoggedIn", {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });
      setConnectedUser(authenticated.data);
    }
    catch (err) {
      navigate("/login")
    }
  }
  useEffect(() => {
    fetchConnectedUser();
  }, [])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/books')
      .then(res => {
        setBooks(res.data);
        setIsLoading(false);
      })
      .catch(err => console.log(err))
    fetchConnectedUser();
  }, []);

  const deleteBooks = id => {
    axios.delete(`http://127.0.0.1:8000/api/books/${id}`)
      .then(() => {
        setBooks(books.filter((book) => book._id !== id))
      })
      .catch(err => console.log(err));
  };
  //Delete from DOM
  const logout = () => {
    localStorage.clear();
    axios.get("http://127.0.0.1:8000/api/users/logout")
      .then(res => {
        navigate("/login");
      })
    cookies.remove("userToken")
  }

  if (isLoading) {
    return <h2> Loading..... </h2>
  }
  return (
    <div className="principal">
      <div className='image'>
        <div className='head'>
          <h1>Welcome {`${connectedUser?.firstName} ${connectedUser?.lastName}`}</h1>
          <button className="btn btn-link" style={{ cursor: "pointer" }} onClick={() => logout()}>{(connectedUser && "logout")}</button>
        </div>
      </div>
      <h1 id="h1">Books List</h1>
      <BooksList books={books} deleteBooks={deleteBooks} connectedUser={connectedUser} />
      <div><Link to={'/new'}><button className="btn btn-primary">Add a Book</button></Link>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  )
}

export default MainBooks
