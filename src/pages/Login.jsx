import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../utils/fbConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import './Login.scss';
import HNav from '../components/HNav/HNav';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/courses");
  }, [user, loading]);
  return (
    
    <div className="app__login">
      <HNav />
      <div className="app__login-container">
        <h2 id='log-login'>Login</h2>
        <input
          type="text"
          className="app__login-textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address..."
        />
        <input
          type="password"
          className="app__login-textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password..."
        />
        <button
          className="app__login-btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        {/* <button className="app__login-btn login-google" onClick={signInWithGoogle}>
          Login with Google
        </button> */}
        {/* <div>
          <Link to="/reset">Forgot Password</Link>
        </div> */}
        <div className='app__login-reg'>
          Don't have an account?  <Link to="/register" id='regLink'> Register</Link> now.
        </div>
      </div>
    </div>
  );
}

export default Login