import React from 'react'
import { Link } from "react-router-dom";
import moment from 'moment';
import Firebase from '../Firebase';

export const Post = ( props ) => {
 
    //console.log( this.props )
        const p = props.p;
        const showLink = props.showLink !== undefined ? props.showLink : true;
        
        //console.log( Firebase.firestore.fromDate( p.timestamp.toDate() ));
       // console.log(p)
      
        return (
          <li className="list-group-item">
            <p>
              {showLink ? (
                <Link to={{ pathname: `/blog/${p.id}` }}>{p.body}</Link>
              ) : (
                p.body
              )}
            </p>
            <p>
              <cite>&mdash; users email address </cite>
              {/*<cite>&mdash; { p.user.emailAddress }</cite>*/}
              <span className="float-right">
                <small>{ moment( p.timestamp.toDate() ).fromNow() }</small>
              </span>
            </p>
          </li>
        );
  
}
