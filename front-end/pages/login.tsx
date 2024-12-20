import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/login.module.css';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      // Store role in session or context (localStorage or state)
      sessionStorage.setItem('role', data.role);
      router.push('/'); // Redirect to a page based on role
    } else {
      setError(data.error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.h2}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.button}>Login</button>
        </form>
        <div className={styles.forgotPassword}>
          <a href="#">Forgot your password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
