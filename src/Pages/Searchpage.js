import React, { useState,useEffect} from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Socialicons from '../Components/Socialicons';
import Axios from 'axios';
import './Searchpage.css';
import Pager from '../Components/Pagers';
import text_truncate from '../Helper/truncate';



function SearchPage({props}) {
    const [movieList, setMovieList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [browseMovies, setBrowseMovies] = useState([]);
    const [quality, setQuality] = useState("");
    const [genre, setGenre] = useState("");
    const [language, setLanguage] = useState("");
    const [year, setYear] = useState("");
    const [rating, setRating] = useState("");
    const [order, setOrder] = useState("");
    const [pages, setPages] = useState(1);

    const getData = () => {
        Axios.get("https://yts.mx/api/v2/list_movies.json").then((response) => {
            setMovieList(response.data.data)
         }
        );
    };
    useEffect(() => {
        getData();
    }, []);

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
        callSearchFunction(e);
    }
    const callSearchFunction = (e) => {
        e.preventDefault();
        Axios.get(`https://yts.mx/api/v2/list_movies.json/?query_term=${searchValue}`).then((response) => {
            setMovieList(response.data.data)
         }
        );
    }
    const getMovies = () => {
        Axios.get(`https://yts.mx/api/v2/list_movies.json/?&quality=${quality}&
        minimum_rating=${rating}&genre=${genre}&page=${pages}`).then((response) => {
        setBrowseMovies(response.data.data)
        });
    };
    useEffect(() => {
        getMovies();
    }, []);
    

    return (
        <div className="Search-Page">
            <header>
                <Header />
            </header>
            <Socialicons />
            <section className="section-top">
                <label className="searchterm"> Search Term:</label><br/>
                <input className="searchterm-input" value={searchValue} onChange={handleSearchInputChanges}></input>
                <button className="searchButton" onClick={callSearchFunction}>Search</button>
            <ul className="filtermovies">
                <li>
                    <label>Quality:</label><br/>
                    <select onClick={(e) => setQuality(e.target.value)}>
                        <option>All</option>
                        <option>720p</option>
                        <option>1080p</option>
                        <option>2160p</option>
                        <option>3D</option>
                    </select>
                </li>
                <li>
                    <label>Genre:</label><br/>
                    <select onClick={(e) => setGenre(e.target.value)}>
                        <option>All</option>
                        <option>Action</option>
                        <option>Adventure</option>
                        <option>Animation</option>
                        <option>Biography</option>
                        <option>Comedy</option>
                        <option>Crime</option>
                        <option>Documnetary</option>
                        <option>Fantasy</option>
                        <option>Horror</option>
                        <option>Music</option>
                        <option>Mystery</option>
                        <option>News</option>
                        <option>Family</option>
                        <option>Thriller</option>
                    </select>
                </li>
                <li>
                    <label>Rating:</label><br/>
                    <select onClick={(e) => setRating(e.target.value)}>
                        <option>All</option>
                        <option>9+</option>
                        <option>8+</option>
                        <option>7+</option>
                        <option>6+</option>
                        <option>5+</option>
                        <option>4+</option>
                        <option>3+</option>
                        <option>2+</option>
                        <option>1+</option>
                    </select>
                </li>
                <li>
                    <label>year:</label><br/>
                    <select onClick={(e) => setYear(e.target.value)}>
                        <option>All</option>
                        <option>1980</option>
                        <option>1982</option>
                        <option>1983</option>
                        <option>1984-1990</option>
                        <option>1990-2000</option>
                        <option>2000-2019</option>
                        <option>2020</option>
                        <option>2021</option>
                    </select>
                </li>                
                <li>
                    <label>Language:</label><br/>
                    <select onClick={(e) => setLanguage(e.target.value)}>
                        <option>All</option>
                        <option>English</option>
                        <option>Nepali</option>
                        <option>Urdu</option>
                        <option>Hindi</option>
                        <option>Malasian</option>
                        <option>Chinese</option>
                    </select>
                </li>
                <li>
                    <label>Order By:</label><br/>
                    <select onClick={(e) => setOrder(e.target.value)}>
                        <option>Latest</option>
                        <option>Old</option>
                        <option>Featured</option>
                        <option>Seeds</option>
                        <option>Peer</option>
                        <option>Rating</option>
                    </select>
                </li>
            </ul>
            </section>
            <Pager pages={pages} setPages={setPages} />
            <div className="movie-container" id="movies-container">
                {movieList?.movies?.map((movie) => {
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
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default SearchPage;
