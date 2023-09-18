import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const ShowAuthors = (props) => {
    const [authorsList, setAuthorsList] = useState([])



    useEffect(() => {
        axios.get("http://localhost:5000/api/authors/")
            .then((res) => {
                console.log(res.data)
                setAuthorsList(res.data.allAuthors)
            })
            .catch((err) => { console.log(err) })
    }, [])

    const deleteAuthors = (id) => {
        axios.delete(`http://localhost:5000/api/authors/${id}`)
            .then(res => {
                console.log("deleted")

                const filteredAuthors = authorsList.filter((eachAuthors) => {
                    if (eachAuthors._id === id) {
                        return false
                    } else {
                        return true

                    }

                })
                setAuthorsList(filteredAuthors)
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div>
            ShowAuthors
            <Link to={"/new/"}><div>Add New Author</div></Link>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Authors</th>
                        <th scope="col">Actions avaliable</th>
                    </tr>
                </thead>
                <tbody>
                    {authorsList.map((authorsShow, idx) => {
                        return (
                            <tr key={idx}>
                                <th scope="row">{authorsShow.title}</th>
                                <td>
                                   <Link to={`/edit/${authorsShow._id}`}><button type="button" className="btn btn-primary ms-3">Edit</button></Link> 
                                    <button type="button" className="btn btn-danger ms-3" onClick={() => {deleteAuthors(authorsShow._id)}}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
        </div>

    )
}

export default ShowAuthors