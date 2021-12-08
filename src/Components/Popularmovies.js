import React from 'react';
import './Popularmovies.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import text_truncate from '../Helper/truncate';


function Popularmovies (  ) {
    const [movieList, setMovieList] = useState([]);

    const getData = () => {
        Axios.get("https://yts.mx/api/v2/list_movies.json").then((response) => {
            {setMovieList(response.data.data)}
         }
        );
    };
    useEffect(() => {
        getData();
    }, []);
    console.log(movieList);
    return (
           <div id="popular-downloads">
                <h2>
                    <i className="fas fa-star"></i>
                    Popular Downloads
                </h2>
                    <img 
                    alt="rss icon"
                    src="https://yts.mx/assets/images/website/rss-icon.png"
                    /> &nbsp;
                    <Link to="/" className="head-link">more...</Link>
            <hr/>
            <div className="movie-container">
                {movieList?.movies?.slice(0, 4).map((movie) => {
                    return <div className="movie-div">
                        <div className="movie-div1">
                            
                            <div   className="movie-card">
                                <img
                                    alt="movie-poster"
                                    src={movie.medium_cover_image}
                                    style ={{objectFit:"cover"}}
                                />
                                <div className="figure-caption">
                                    <i className="fas fa-star"></i>
                                    <p>{movie.rating}</p>
                                    <p>{movie.genres }</p>
                                </div>
                            </div>
                            <p>{ text_truncate( movie.title,30, "...") }</p>
                            <p>{movie.year }</p>
                        </div>
                   </div>
                })
                
                }
            </div>
            
        </div>
    )
}

export default Popularmovies;
