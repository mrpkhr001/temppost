import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const PostList = () => {
  let [posts, setPosts] = useState([]);
  let [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getAllPosts();
  }, []);
  let getAllPosts = () => {
    let itemUrl = "https://jsonplaceholder.typicode.com/posts";
    Axios.get(itemUrl)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error);
      });
  };

  return (
    <>
      {/* <pre>{JSON.stringify(items)}</pre> */}
      <div className="container">
        <div className="row">
          <h1 className="text-center">
            <span className="text-danger">Post List</span>
          </h1>

          {posts.map((plist) => {
            const { id, title, body } = plist;

            return (
              <div key={id} className="col-md-3 p-3">
                <div className="card">
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">
                      ID: <span className="text-primary">{id}</span>
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Title: <span className="text-primary">{title}</span>
                    </h6>

                    <Link
                      to={`/posts/${id}`}
                      className="btn btn-primary btn-sm m-2"
                    >
                      Show Comments
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PostList;
