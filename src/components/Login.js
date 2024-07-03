// LoginForm.js
import React, { useState } from 'react';
import styles from '../css/LoginForm.module.css';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password, rememberMe });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
      <div className={styles.checkboxGroup}>
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor="rememberMe">Remember me</label>
      </div>
      <button type="submit" className={styles.submitButton}>Login</button>
      <a href="/forgot" className={styles.forgotPassword}>Forgot password?</a>
    </form>
  );
};

export default LoginForm;