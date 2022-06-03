import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";

function ShowComments() {
  const [comment, setComment] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    let dataUrl = `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`;
    Axios.get(dataUrl)
      .then((res) => {
        console.log(res);
        setComment(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params.id]);

  return (
    <div className=" m-5">
      <button className="primary" onClick={() => navigate("/")}>
        Back to Post List
      </button>
      <h4 className="text-center text-dark"> Comment List</h4>
      <div className="container">
        <div className="row">
          <div className="col">
            {comment.map((clist) => {
              const { id, name, email } = clist;

              return (
                <div key={id} className="col-md-3 p-3">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-subtitle mb-2 text-muted">
                        Id: <span className="text-primary">{id}</span>
                      </h6>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Name: <span className="text-primary">{name}</span>
                      </h6>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Email: <span className="text-primary">{email}</span>
                      </h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowComments;
