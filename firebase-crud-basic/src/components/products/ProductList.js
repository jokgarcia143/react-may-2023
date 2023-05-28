import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';

import "bootstrap/dist/css/bootstrap.min.css";

//Class Component
class ProductList extends Component {
  //Component LifeCycle
  constructor(props) {
    super(props);

    this.ref = firebase.firestore().collection('products');
    this.unsubscribe = null;
    this.state = {
      products: []
    };
  }

  //push = to add new item to Array
  onCollectionUpdate = (querySnapshot) => {
    const products = [];
    //Get friebase DB Collection(users) records
    //forEach loops the collection
    querySnapshot.forEach((doc) => {
      const { product_name, description, price  } = doc.data();
      products.push({
        key: doc.id,
        doc, // DocumentSnapshot
        product_name,
        description,
        price,
      });
    });
    this.setState({
      products
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
            PRODUCTS MASTERLIST
          </h3>
        </div>
        <div className="panel-body">
          <table className="table">
            <thead>
              <tr className="success">
                <th>Product Name</th>
                <th>Description</th>
                <th>Selling Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map(product =>
                <tr className="info">
                  <td><Link to={`/view/${product.key}`}>{product.product_name}</Link></td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
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

export default ProductList;
