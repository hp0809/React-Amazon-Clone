import React, {useEffect} from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout.js';
import Login from './Login';
import Payment from './Payment.js';
import {auth} from './firebase';
import {useStateValue} from './StateProvider.js';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'
import Orders from './Orders';

const promise = loadStripe('pk_test_51HbXy1C27NFV1uW1PPdkcM78trjpFhDU8cUaofPdUElzvZlUB5t9kkKFXxSi0OIsPKEF3F0HX0CMV1ynuvxJQEzN00hOUVU0BV');

function App() {
  const [{}, dispatch] =useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="App">
      
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route> 
          <Route path="/orders">
            <Header />
            <Orders/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
