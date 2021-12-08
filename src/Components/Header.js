import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Modals from './Modal';
import ytslogo from "../images/logo-YTS.svg";
import Axios from 'axios';

function Header( {movieList} ) {
    const [modal, setModal] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    
    const searchData = () => {
        Axios.get("https://yts.mx/api/v2/list_movies.json").then((response) => {
            {setSearchValue(response.data.data)}
         }
        );
    };
    useEffect(() => {
        searchData();
    }, []);
    console.log(searchValue);
    // const searchData = () => {
    //     Axios.get("https://yts.mx/api/v2/list_movies.json/?query_term=search_text").then((response) => {
    //         {setSearchValue(response.data.data)}
    //      }
    //     );
    // }
    // useEffect(() => {
    //     searchData();
    // }, []);
    // console.log(searchValue);

    const showModalHandler = () => {
        setModal(prev => !prev );
    }

    const handleSearch = () => {
        // e.preventDefault();
        // const searchWord = e.target.value
        // const newFilter = searchValue.filter((value) => {
        //     return value.title.toLowerCase().includes(searchWord.toLowerCase);
        // });
        // setFilteredData(newFilter);
        Axios.get(`https://yts.mx/api/v2/list_movies.json/?query_term=${searchValue}`).then((response) => {
             setFilteredData(response.data.data)
            console.log(response);
         }
        );
    };

    return (
        <div className="header-component">
            <header>
                <nav className="navbar">
                    <img alt="ytslogo" src={ytslogo} />
                    {/* <p>HD movies at smallest file size</p> */}
                    <ul className="menu">
                        <li href="/search">
                            <Link to="/search">
                            <form className="search">
                                <span className="search-span">
                                    <i className="fas fa-search" onClick={handleSearch}></i>
                                    <input type="search"
                                        // value={searchValue}
                                        // onChange ={(e) =>{setSearchValue(e.target.value)}}
                                        placeholder=" Quick search" />
                                </span>
                            </form>
                            </Link>
                        </li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link className="green" to="/">4K</Link></li>
                        <li><Link to="/">Trending</Link></li>
                        <li><Link to="/">Browse Movies</Link></li>
                        <li>
                            <span onClick={showModalHandler} className="login"> Login</span>
                            {modal && <Modals modal={modal} setModal={setModal} /> }
                        </li>&nbsp;
                        <span className="slash"> | </span>&nbsp;
                        <li><span onClick = {showModalHandler} className="login"> Register</span></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;

