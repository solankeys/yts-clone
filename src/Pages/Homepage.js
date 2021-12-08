import React from 'react'

import Popularmovies from '../Components/Popularmovies';
import './Homepage.css';
import Warning from '../Components/Warning';
import Socialicons from '../Components/Socialicons';
import Header from '../Components/Header';
import Latest from '../Components/Latest';
import Upcoming from '../Components/Upcoming';
import Footer from '../Components/Footer';

function Homepage() {
    return (
        <div className="Homepage">
            <header>
            <Header />
            </header>
            <section className="topsection">
                <h1 className="hph1">
                    Download YTS YIFY movies: HD smallest size
                </h1>
                <p className="hppg">
                    Welcome to the official <b>YTS.MX</b> (.LT) website. Here you can browse and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents.
                </p>
                <p className="hph4"><a href="https://yts.mx/blog/yts-mx-is-the-only-new-official-domain-for-yify-movies" target="_blank" rel="noreferrer"
                title="YTS.MX is the only new official domain for YIFY Movies"
                ><b>IMPORTANT - YTS.MX is the only new official domain for YIFY Movies</b></a></p>
                <Socialicons />
                <Popularmovies />
                </section>
            <section>
                <Warning />
            </section>
            <section className="latest-section">
                <Latest />
            </section>
            <section>
                <Upcoming />
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Homepage;
