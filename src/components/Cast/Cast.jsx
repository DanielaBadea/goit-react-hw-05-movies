import React, { useEffect, useState } from "react";
import styles from './Cast.module.css'
import { IMAGE_URL, getMoviesCredits } from "helpers/api";
import { useParams } from "react-router-dom";

const Cast = () => {
    const [movieCredits, setMovieCredits] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getMoviesCredits(movieId)
            .then(response => {
                console.log('Response movie credits:', response)
                setMovieCredits(response.cast);
            })
            .catch(error => {
                console.error('Error fetching movie credits:', error);
            });
    }, [movieId]);
    
    return (
        <>
           <ul className={styles.containerActors}>
            {
                movieCredits.length > 0 ? (
                    movieCredits.map(actor => (
                        <li key={actor.id} className={styles.itemsActors}>
                            <img 
                            src = {IMAGE_URL + actor.profile_path} 
                            alt={actor.name}
                            className={styles.posterActor}/>
                            <h3 className={styles.nameActor}>{actor.name}</h3>
                        </li>
                    ))
                ) : (
                    <li>No cast available</li>
                )
            }
           </ul>
        </>
    )
};
export default Cast;
