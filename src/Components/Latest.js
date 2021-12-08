import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Popularmovies.css';
import Axios from 'axios';
import text_truncate from '../Helper/truncate';

function Latest() {
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
        <div className="latest-page">
            <h4> Latest YIFY Movies Torrents  <Link to="/"> Browse All</Link> </h4>
           
            <div className="movie-container">
                {movieList?.movies?.slice(0,4).map(( movie) => {
                    return <div className="movie-div">
                        <div className="movie-div1">
                            <div className="movie-card">
                                <figure>
                                    <img
                                        alt="movie-poster"
                                        src={movie.medium_cover_image}
                                        style ={{objectFit:"cover"}}
                                        />
                                    {/* <figcaption>
                                        <i className="fas fa-star"></i>
                                        <p>{movie.rating}</p>
                                        <p>{movie.genres }</p>
                                    </figcaption> */}
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
    )
}

export default Latest;
