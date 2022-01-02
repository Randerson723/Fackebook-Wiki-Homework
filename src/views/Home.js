import React from "react";
import { Post } from '../components/Post'

export const Home = ( props ) => {
 return (
    <React.Fragment>
      <h3>Home | Welcome</h3>
      <hr />
      <form action="" method="post">
        <div className="form-group">
          <div className="row">
            <div className="col-md-10">
              <input
                type="text"
                name="user_status"
                id=""
                className="form-control"
                placeholder="Type your status"
                aria-describedby="helpId"
              />
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                value="Post"
                className="btn btn-info btn-block"
              />
            </div>
          </div>
        </div>
      </form>
      <hr />
      <ul className="list-group">
        { props.posts.map(post => <Post key={post.id} p={post} />)}
        
      </ul>
    </React.Fragment>
  );
};
