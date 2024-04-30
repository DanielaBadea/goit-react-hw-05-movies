import React from "react";
import PropTypes from 'prop-types'; 
import { IMAGE_URL } from "helpers/api";
import styles from "./PostersMovies.module.css"
import { Link } from "react-router-dom";
const PostersMovies = ({ movies }) => {
    return (
        <>
            <ul className={styles.gallery}>
                {movies.map(movie => (
                    <li key={movie.id} className={styles.itemsImg}>
                       <Link to = {`movies/${movie.id}`} className={styles.linkPoster}>
                       <img
                         className={styles.itemImg} 
                         src={IMAGE_URL + movie.poster_path} 
                         alt={movie.title}
                        />
                        <p className={styles.posterVote}>{movie.vote_average.toFixed(1)}</p>
                        <p className={styles.posterTitle}>{movie.title}</p>
                        </Link> 
                        </li>
                ))}
            </ul>
        </>
    );
}

PostersMovies.propTypes =  {
    movies: PropTypes.array.isRequired,
}
export default PostersMovies;
