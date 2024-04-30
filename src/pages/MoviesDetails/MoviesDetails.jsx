import React, { useEffect, useState } from "react";
import { getMoviesDetails } from "helpers/api";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { IMAGE_URL } from "helpers/api";
import styles from './MoviesDetails.module.css';
import { MdArrowBackIos } from "react-icons/md";

const MoviesDetails = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        getMoviesDetails(movieId)
        .then(response => {
            console.log('Response movie details:', response)
            setMovie(response)
        })
    }, [movieId])

    // Verificăm dacă movie este null înainte de a încerca să accesăm proprietățile sale
    if (!movie) {
        return <div>Loading...</div>;
    }
    // adăugarea verificării if (!movie), te asiguri că componenta returnează 
    // un mesaj de încărcare atâta timp cât obiectul movie nu este încă definit, prevenind astfel eroarea de citire a unei proprietăți a unui obiect null.

    return (
        <>
        <div className={styles.wrapper}>
        <div className={styles.containerBtn}>
            <Link className={styles.btnBack} to='/'>
                <div className={styles.linkContent}>
                    <MdArrowBackIos className={styles.icon} />
                    <span>Go back</span>
                </div>
            </Link>
        </div>
        <div className={styles.containerMovies}> 
           <div className={styles.contaonerPosition}>
           <img 
                    src={IMAGE_URL + movie.poster_path} 
                    alt={movie.title} 
                    className={styles.itemPoster} 
                />
                 <p className={styles.posterVote}>{movie.vote_average.toFixed(1)}</p>
           </div>
                
                <div className={styles.containerDetails}>
                <h2>{movie.title}</h2>
                   
                    <p className={styles.description}><span className={styles.overview}>Overview: </span>{movie.overview}</p>
                    <p className={styles.description}><span className={styles.genres}>Genres: </span>{movie.genres.map(genre => genre.name).join(' ')}</p>
                </div>       
                </div>
                <div className={styles.boxInfo}>
                <h3 className={styles.info}>Additional information</h3>
                <div className={styles.linksComponents}>
                <NavLink to='cast' className={styles.link}>Casts</NavLink>
                <NavLink to='reviews' className={styles.link}>Reviews</NavLink>
                </div>
                <Outlet/>
                </div>
        </div>
          
           
        </>
    );
}

export default MoviesDetails;
