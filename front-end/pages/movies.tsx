import React, { useEffect, useState } from 'react';
import Header from '@components/Header';
import styles from '../styles/globals.module.css';
import { GetServerSideProps } from 'next';


const Movies: React.FC = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('/api/movies')
            .then((res) => res.json())
            .then((data) => setMovies(data));
        
        const seedMovies = async () => {
            try {
              const response = await fetch('/api/seed-movies', { method: 'POST' });
              if (!response.ok) {
                console.error('Failed to seed movies:', await response.json());
              } else {
                console.log('Movies seeded successfully');
              }
            } catch (error) {
              console.error('Error seeding movies:', error);
            }
          };
      
        seedMovies();
    }, []);

    return (
        <div className={styles.background}>
            <Header />
            <main className={styles.mainContent}>
                <section className={styles.moviesSection}>
                    <h1 className={styles.pageTitle}>Browse Movies</h1>
                    <p className={styles.pageDescription}>
                        Explore our extensive collection of movies from various genres, from classics to the latest releases.
                    </p>
                    <div className={styles.movieList}>
                        {/* Replace with dynamic movie data */}
                        {movies.map((movie: { id: number; title: string; year: number }) => (
                            <div className={styles.movieCard}>{movie.title}</div>
                        ))}
                    </div>
                </section>
                <section className={styles.featureSection}>
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

export default Movies;
