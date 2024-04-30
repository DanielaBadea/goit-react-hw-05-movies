import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import { RiMovie2Line } from "react-icons/ri";
import { Outlet } from "react-router-dom";

const NavigationBar = () => {
    return (
        <nav className={styles.menuNav}>
            
            <NavLink to="/" end className={styles.link}>
            <div className={styles.containerLogo}>
                <div className={styles.logo}>
                <RiMovie2Line className={styles.iconLogo} />
                </div>
                    <span className={styles.titleLogo}>Movies<span className={styles.titleLogoDB}>DB</span></span>
                </div>
            </NavLink>
           
            <div className={styles.containerPages}>
            <NavLink to="/" className={`${styles.link} ${styles.btnLink}`}>Home</NavLink>
            <NavLink to="/movies" className={`${styles.link} ${styles.btnLink}`}>Movies</NavLink>
            </div>
            <Outlet/>
        </nav>
    );
};

export default NavigationBar;
