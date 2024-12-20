import React, { useEffect } from 'react';
import { Button } from '../components/Button';
import DataComponent from '@components/DataComponent';
import { Parent } from '@components/Parent';
import HoverComponent from '@components/HoverComponent';
import Header from '@components/Header';
import styles from '../styles/globals.module.css';
import { useRouter } from 'next/router'; 

const Home: React.FC = () => {
    const router = useRouter(); 
    const handleClick = () =>  router.push('/movies');
    useEffect(() => {
        // Check if the user is logged in (check role in sessionStorage)
        const role = sessionStorage.getItem('role');
        if (!role) {
          router.push('/login'); // Redirect to login page if no role
        }
      }, [router]);

    return (
        <div className={styles.background}>
            <Header />
            <main className={styles.mainContent}>
                <section className={styles.heroSection}>
                    <h1 className={styles.heroTitle}>Welcome to FilmScope</h1>
                    <p className={styles.heroSubtitle}>Discover, Explore, and Watch Movies Like Never Before</p>
                    <button onClick={handleClick} className={styles.button}>Get started</button>
                </section>
                <section className={styles.featureSection}>
                    <h2 className={styles.featureTitle}>Featured Movies</h2>
                    <div className={styles.movieList}>
                        {/* You can map over a list of movies here */}
                        <div className={styles.movieCard}>
                            <img src="/images/Beetlejuice_Beetlejuice.jpg" alt="Beetlejuice Beetlejuice" className={styles.moviePoster} />
                            <h3>Beetlejuice Beetlejuice</h3>
                        </div>
                        <div className={styles.movieCard}>
                            <img src="/images/scream6.jpg" alt="Scream 6 " className={styles.moviePoster} />
                            <h3>Scream 6</h3>
                        </div>
                        <div className={styles.movieCard}>
                            <img src="/images/babysitterKillerQueen.jpg" alt="The Babysitter: Killer Queen" className={styles.moviePoster} />
                            <h3>The Babysitter: Killer Queen</h3>
                        </div>
                    </div>
                </section>
            </main>
            <footer className={styles.footer}>
                <p>&copy; 2024 FilmScope. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
