import React, { Component } from 'react'
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";


export class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: '',
            contact_number: '',
            email: '',
            full_name: ''
        };
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('users').doc(this.props.match.params.id);
        
        ref.get().then((doc) => {
            if (doc.exists) {
              const user = doc.data();
              this.setState({
                key: doc.id,
                contact_number: user.contact_number,
                email: user.email,
                full_name: user.full_name
              });
            } else {
              console.log("No such document!");
            }
          });
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({user:state});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { contact_number, email, full_name } = this.state;

        const updateRef = firebase.firestore().collection('users').doc(this.state.key);

        updateRef.set({
            contact_number,
            email,
            full_name
          }).then((docRef) => {
            this.setState({
              key: '',
              contact_number: '',
              email: '',
              full_name: ''
            });
            this.props.history.push("/view/"+this.props.match.params.id)
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            EDIT USER
                        </h3>
                    </div>
                    <div className="panel-body">
                        <h4><Link to="/" className="btn btn-primary">User List</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Full Name:</label>
                                <input type="text" className="form-control" name="full_name" value={this.state.full_name} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Email:</label>
                                <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Contact:</label>
                                <input type="text" className="form-control" name="contact_number" value={this.state.contact_number} onChange={this.onChange} />
                            </div>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditUser
