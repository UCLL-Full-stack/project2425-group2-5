// components/Header.tsx
import React from 'react';
import styles from './Header.module.css';  // Import the CSS module

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>FilmScope</div>
      <nav>
        <ul className={styles['nav-list']}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/movies">Movies</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
