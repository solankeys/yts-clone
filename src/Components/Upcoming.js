import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Upcoming.css';
import Axios from "axios";
import text_truncate from '../Helper/truncate';
    

function Upcoming() {
    const [upcomingMovieList, setUpcomingMovieList] = useState([]);
    const getData = () => {
    
        Axios.get("https://yts.mx/api/v2/list_movies.json").then((response) => {
            {setUpcomingMovieList(response.data.data)}
        }
        );
    };
    useEffect(() => {
        getData();
    }, []);
    console.log(upcomingMovieList);
    return (
        <div className="upcoming-page">
            <div className="upcoming-content">
                <h4> Upcoming YIFY Movies
                    <Link to="/"> Request a Movie</Link>
                </h4>
            <div className="movie-container">
                {upcomingMovieList?.movies?.slice(0,8).map(( movie) => {
                    return <div className="movie-div">
                        <div className="movie-div1">
                            <div className="movie-card">
                                <figure>
                                    <img
                                    alt="movie-poster"
                                    src={movie.medium_cover_image}
                                    style ={{objectFit:"cover"}}
                                    />
                                </figure>
                            </div>
                            <p>{ text_truncate( movie.title,30, "...") }</p>
                            <p>{ movie.year}</p>
                        </div>
                   </div>
                })
                
                }
            </div>
            </div>
            
        </div>
    )
}

export default Upcoming;
