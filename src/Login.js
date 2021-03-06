import React, {useState} from 'react'
import './Login.css';
import {Link, useHistory} from 'react-router-dom';
import { auth, db } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        //firebase login
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch((err) =>alert(err.message));
    }
    const signUp = e => {
        e.preventDefault();
        //sign up with firebaseConfig
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) =>{
                //successfully created a new user
                if(auth) {
                    history.push('/')
                }
            })
            .catch(err =>alert(err.message));
    }
    return (
        <div className="login">
            <Link to='/'>
                
                    <img className="login__image" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='Amazon Logo'/>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value-={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type="submit" className="login__signin__button"
                    onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By signing in, you agree to REACT AMAZON CLONE
                    Conditions of Service. Please see our
                    Privacy Policy for more information
                </p>
                <button className="login__signup__button"
                 onClick={signUp}>Create your REACT Amazon Account</button>
            
            </div> 
        </div>
      
    )
}

export default Login
