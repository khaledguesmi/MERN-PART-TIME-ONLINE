import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Details = (props) => {
  const [books, setBooks] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/books/${id}`)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className='principal '>
      <table className='table table-striped table-bordered'>
        <div>
          {(books) ?
            <div key={books._id}>
              <div id="card" >
                <table class="table table-bordered">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col" >Title</th>
                      <th scope="col" >Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='tab' > {books.title}</td>
                      <td className='tab'>{books.description}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br /><br />
            </div> : null
          }
        </div>
      </table>
      <Link to={'/mainbooks'}><button className="btn btn-secondary">Go Home</button></Link>
    </div>
  );
};

export default Details;
