import React, { Component } from 'react'
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

export class AddUser extends Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection('users');

        this.state = {
            contact_number: '',
            email: '',
            full_name: ''
        };
    }
    //get Input value
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    //Save User
    onSubmit = (e) => {
        e.preventDefault();

        const { contact_number, email, full_name  } = this.state;

        this.ref.add({
            contact_number,
            email,
            full_name
        }).then((docRef) => {
            this.setState({
                contact_number: '',
                email: '',
                full_name: ''
            });
            this.props.history.push("/")
        }).catch((error) => {
                console.error("Error adding document: ", error);
            });
    };



    render() {
        const { contact_number, email, full_name  } = this.state;
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            ADD USER
                        </h3>
                    </div>
                    <div className="panel-body">
                        <h4><Link to="/" className="btn btn-primary">User List</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Full Name:</label>
                                <input type="text" className="form-control" name="full_name" value={full_name} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Email:</label>
                                <input type="text" className="form-control" name="email" value={email} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Contact:</label>
                                <input type="text" className="form-control" name="contact_number" value={contact_number} onChange={this.onChange} />
                            </div>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddUser
