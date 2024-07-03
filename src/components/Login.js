// LoginForm.js
import React, { useState } from 'react';
import styles from '../css/LoginForm.module.css';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
const LoginForm = ({ onLogin }) => {
    // const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) =>{
    e.preventDefault();
    const formData = {
        username,
        password
    }
    console.log("formData",formData)
    axios.post("http://localhost:5001/user/login",formData).then(res=>{
      console.log("res",res.data)
      localStorage.setItem("user", JSON.stringify(res.data))
        if(res.status==200){
            window.location.href= "/"
            // history.push("/dashboard")
        }
    }) 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password, rememberMe });
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleLogin}>
        <h2>Member Login</h2>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Login</button>
      
      </form>
    </div>
  );
};

export default LoginForm;