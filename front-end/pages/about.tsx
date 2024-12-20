import React from 'react';
import Header from '@components/Header';
import styles from '../styles/globals.module.css';

const About: React.FC = () => {
    return (
        <div className={styles.background}>
            <Header />
            <main className={styles.mainContent}>
                {/* About Section with Enhanced Background */}
                <section className={styles.aboutSection}>
                    <h1 className={styles.heroTitle}>About FilmScope</h1>
                    <p className={styles.heroSubtitle}>
                        FilmScope is your go-to platform for discovering and watching movies online.
                        We aim to provide a seamless experience with a wide range of movies across various genres.
                        Our team is dedicated to offering the best in cinematic entertainment.
                    </p>
                </section>
                <section className={styles.extraSection}>
                    <h2 className={styles.subtitle}>Why Choose FilmScope?</h2>
                    <p className={styles.extraText}>
                        We offer a curated selection of films with recommendations tailored just for you.
                        Our easy-to-use interface and intuitive design make it a breeze to find your next favorite movie.
                    </p>
                </section>
            </main>
            <footer className={styles.footer}>
                <p>&copy; 2024 FilmScope. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default About;
