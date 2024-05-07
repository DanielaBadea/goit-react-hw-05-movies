import { getTrailerMovie } from "helpers/api";
import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player'
import { useParams } from "react-router-dom";
import Spinner from "components/Spinner/Spinner";
// import styles from './TrailerPlayer.module.css';

const TrailerPlayer = () => {
    const [trailer, setTrailer] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

const { movieId } = useParams();

useEffect(() => {
    setIsLoading(true)
    getTrailerMovie(movieId)
        .then(response => {
            console.log("Trailer:", response);
            const trailerData = response.results[0]; // Accesam primul obiect din array-ul results
            setTrailer(trailerData);
            console.log("Cheia videoclipului:", trailerData && trailerData.key);
            console.log("URL-ul videoclipului:", trailerData && `https://www.youtube.com/watch?v=${trailerData.key}`);
            setIsLoading(false);
                }).catch(error => {
                    console.error("Error fetching trailer:", error);
                    setIsLoading(false);
                })
}, [movieId]);

    return(
        <>
        {
            isLoading&&<Spinner/>
        }
        {trailer && (
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${trailer.key}`}
                    controls={true}
                    width="70%"
                    height="70%"
                />
            )}
        </>
    )
}
export default TrailerPlayer;
