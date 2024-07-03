import React from 'react';
import styles from '../css/Header.module.css';

const Header = ({ isLoggedIn, username, onLogout }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>WeChat</div>
      <nav className={styles.nav}>
        {isLoggedIn ? (
          <>
            <span className={styles.welcome}>Welcome, {username}</span>
            <button onClick={onLogout} className={styles.logoutButton}>Logout</button>
          </>
        ) : (
          <>
            <a href="/login" className={styles.navLink}>Login</a>
            <a href="/register" className={styles.navLink}>Register</a>
          </>
        )}
        <div className={styles.userIcon}>
          <i className="fas fa-user"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;