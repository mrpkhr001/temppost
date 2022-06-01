import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';

const ShowComments = () => {
    let postid = useParams().id;
   // console.log(postid);
    const navigate = useNavigate();
    const [comment, setComment] = useState([]);
    const [submited, setSubmited] = useState(false);

    /*const ShowComments = async () => {

      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}/comments`);
      const comment = await response.json();
      console.log(comment);
      setComment(comment);
    }*/

    useEffect(() => {
       let dataUrl = `https://jsonplaceholder.typicode.com/posts/${postid}/comments`;
        Axios.get(dataUrl)
            .then((res) => {
              console.log(res)
                setComment(res.data);
               
            })
            .catch((error) => {
                console.error(error);
            })
            ShowComments();

    }, []);



   
    return (
        <>
            {submited ? (
                navigate("/postlist")
            ) : (
                <>
                    <pre>{JSON.stringify(comment)}</pre>
                    <div className='container text-center'>
                        <div className='row'>
                            <div className='col'>
                                <h4 className='text-center text-dark'> Comment List</h4>
                                
                                {
                        comment.map((clist) => {
                          const { id, name, email } = clist

                          return (
                            <div className="col-md-3 p-3">
                              <div className="card">
                                <div className="card-body">
                                  <h6 className="card-subtitle mb-2 text-muted">Id:  <span className="text-primary">{id}</span></h6>
                                  <h6 className="card-subtitle mb-2 text-muted">Name:  <span className="text-primary">{name}</span></h6>
                                  <h6 className="card-subtitle mb-2 text-muted">Email:  <span className="text-primary">{email}</span></h6>
                                </div>
                              </div>
                            </div>

                          );
                        })
                      }


                                </div>
                            </div>
                        </div>
                   
                </>
            )}
        </>

    )
}

export default ShowComments;