import React, { useEffect, useState } from 'react';
import styles from './Home.module.css'
import { PiPopcornBold } from "react-icons/pi";
import PostersMovies from "components/PostersMovies/PostersMovies";
import { getTrendingMovies} from 'helpers/api';
import Spinner from 'components/Spinner/Spinner';

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getTrendingMovies()
        .then(response => {
            console.log("Movies response:", response);
            if (response && response.results) {
                console.log("Movies:", response.results);
                setMovies(response.results);
            } else {
                console.error("No movies found in response");
            }
            setIsLoading(false)
        })
        .catch(error => {
            console.error("Error fetching trending movies:", error);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className={styles.containerHome}>
             <div className= {styles.containerBox}>
            <div className={styles.titleBox}>
            <h1 className={styles.title}>Trending movies today</h1>
             <PiPopcornBold  className={styles.iconHome}/>
            </div>
        </div>
        {isLoading ? <Spinner/> :  <PostersMovies movies={movies} context="" />}
        </div>
       
    )
};
