import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';

import "bootstrap/dist/css/bootstrap.min.css";

//Class Component
class App extends Component {
  //Component LifeCycle
  constructor(props) {
    super(props);

    this.ref = firebase.firestore().collection('users');
    this.unsubscribe = null;
    this.state = {
      users: []
    };
  }

  //push = to add new item to Array
  onCollectionUpdate = (querySnapshot) => {
    const users = [];
    //Get friebase DB Collection(users) records
    //forEach loops the collection
    querySnapshot.forEach((doc) => {
      const { contact_number, email, full_name  } = doc.data();
      users.push({
        key: doc.id,
        doc, // DocumentSnapshot
        contact_number,
        email,
        full_name,
      });
    });
    this.setState({
      users
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  
  render() {
    return (
      <div className="container">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">
            USER MASTERLIST
          </h3>
        </div>
        <div className="panel-body">
          <h4><Link to="/create" className="btn btn-primary">Add User</Link></h4>
          <table className="table table-stripe">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map(user =>
                <tr>
                  <td><Link to={`/view/${user.key}`}>{user.full_name}</Link></td>
                  <td>{user.email}</td>
                  <td>{user.contact_number}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
      );
  }
  
}

export default App;
