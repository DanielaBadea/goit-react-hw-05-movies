import { getTrailerMovie } from "helpers/api";
import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player'
import { useParams } from "react-router-dom";
// import styles from './TrailerPlayer.module.css';

const TrailerPlayer = () => {
    const [trailer, setTrailer] = useState(null);
const { movieId } = useParams();

useEffect(() => {
    getTrailerMovie(movieId)
        .then(response => {
            console.log("Trailer:", response);
            const trailerData = response.results[0]; // Accesam primul obiect din array-ul results
            setTrailer(trailerData);
            console.log("Cheia videoclipului:", trailerData && trailerData.key);
            console.log("URL-ul videoclipului:", trailerData && `https://www.youtube.com/watch?v=${trailerData.key}`);
        })
}, [movieId]);

    return(
        <>
        {trailer && (
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${trailer.key}`}
                    controls={true}
                    width="100%"
                    height="100%"
                />
            )}
        </>
    )
}
export default TrailerPlayer;
