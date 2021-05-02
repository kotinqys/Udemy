import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login&Register/Login';
import Register from './components/Login&Register/Register'

import './scss/app.scss'


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
          <Route exact path='/' component={Content}/>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
