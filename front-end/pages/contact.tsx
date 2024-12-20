import React, { useState } from 'react';
import Header from '@components/Header';
import styles from '../styles/globals.module.css';
import { Button } from '@components/Button';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('Thank you for reaching out! We will get back to you soon.');
    };

    return (
        <div className={styles.background}>
            <Header />
            <main className={styles.mainContent}>
                <section className={styles.contactSection}>
                    <h1 className={styles.pageTitle}>Contact Us</h1>
                    <p className={styles.pageDescription}>
                        Have any questions or feedback? Feel free to reach out to us using the form below.
                    </p>
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                        </div>
                        <button>Submit</button>
                    </form>
                    {formStatus && <p className={styles.formStatus}>{formStatus}</p>}
                </section>
            </main>
            <footer className={styles.footer}>
                <p>&copy; 2024 FilmScope. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Contact;
