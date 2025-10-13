import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../css/products.module.css';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
    return (
        <div className={styles.page}>
            <Navbar />

            <main className={styles.main}>
                <div className={styles.content}>
                    <h1>PRODUCTS</h1>
                    <div className={styles.placeholder}>
                        <h2>coming soon...</h2>
                        <p>This page is under construction. Content will be added soon.</p>
                    </div>
                    <div className={styles.testProduct}>
                        <Link to="/test-product" className="nav-link">Test Product</Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Products;