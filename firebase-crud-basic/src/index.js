import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar'
import AddUser from './components/users/AddUser';
import ViewUser from './components/users/ViewUser';
import EditUser from './components/users/EditUser';
import About from './components/About';
import FooterPage from './components/FooterPage';
import ProductList from './components/products/ProductList';



ReactDOM.render(
  <Router>
   <div>
    <NavBar />
    
    <Route exact path='/' component={App} />
    <Route exact path='/products' component={ProductList} />
    <Route exact path='/create' component={AddUser} />
    <Route exact path='/view/:id' component={ViewUser} />
    <Route exact path='/edit/:id' component={EditUser} />
    <Route exact path='/about' component={About} />

    <FooterPage/>
   </div>
  </Router>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
