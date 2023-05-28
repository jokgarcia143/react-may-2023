import React, { Component } from 'react'
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";


export class ViewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            key: ''
        };
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('users').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                this.setState({
                    user: doc.data(),
                    key: doc.id,
                    isLoading: false
                });
            }
            else {
                console.log("No such document!");
            }
        });
    }

    delete(id) {
        firebase.firestore().collection('users').doc(id).delete().then(() => {
            console.log("Deleted");
            //Redirect to default page
            this.props.history.push("/")
        }).catch((error) => {
            console.log("Error Deleting", error);
        });
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4><Link to="/" className="btn btn-primary">User List</Link></h4>
                        <h3 className="panel-title">
                            {this.state.user.full_name}
                        </h3>
                    </div>
                    <div className="panel-body">
                        <dl>
                            <dt>Email:</dt>
                            <dd>{this.state.user.email}</dd>
                            <dt>Contact:</dt>
                            <dd>{this.state.user.contact_number}</dd>
                        </dl>
                        <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
                        <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewUser
