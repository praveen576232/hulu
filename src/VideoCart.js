import React,{forwardRef} from 'react'
import './VideoCart.css'
import TextTruncate from 'react-text-truncate'
import {ThumbUpSharp} from '@material-ui/icons'
const base_url = "https://image.tmdb.org/t/p/original/"
const VideoCart = forwardRef(({movie},ref) =>{
    return (
        <div ref={ref} className="videocart">
            <img alt="movie poaster" src={`${base_url}${movie.backdrop_path || movie.poaster_path}`}></img>
         <TextTruncate
         line={1}
         element="p"
         truncateText="..."
         text ={movie.overview}
         />

    
                <h2>{movie.title || movie.original_name}</h2>
            <div className="movie_info">
            <p>
                    {movie.media_type && `${movie.media_type}* `}
                    {movie.release_date || movie.first_air_date}
                   {` `} <ThumbUpSharp />
                    {movie.vote_count}
                </p>
                </div>       
        </div>
    )
})

export default VideoCart
