import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
const BooksList = (props) => {
    const { books, deleteBooks, connectedUser } = props



    return (
        <div className="container">
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr class="border border-dark">
                        <th><h3>Title</h3></th>
                        <th><h3>Description</h3></th>
                        <th><h3>Actions</h3></th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => {
                        return (
                            <tr key={book._id} class="border border-dark">
                                <td className='bID'><p >{book.title}</p></td>
                                <td className='bID'><p>{book.description}</p></td>
                                <td className='bID'>
                                    {
                                        connectedUser?._id === book.creator && (<Link to={`/edit/${book._id}`}>

                                            <button className='btn btn-warning'>🖊️Edit Book</button>

                                        </Link>
                                        )}&nbsp;&nbsp; &nbsp;

                                    <Link to={`/details/${book._id}`}><button className='btn btn-success'>View Book</button></Link> &nbsp; &nbsp; &nbsp;
                                    {console.log()}
                                    {console.log()}
                                    {
                                        connectedUser?._id === book.creator && (
                                            <button onClick={() => { deleteBooks(book._id) }} className='btn btn-danger'>🚮Delete Book</button>
                                        )}
                                </td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default BooksList