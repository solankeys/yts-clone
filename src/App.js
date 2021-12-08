import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Homepage from './Pages/Homepage';

import Api from './Pages/Api';
import Blog from './Pages/Blog';
import BrowseMovies from './Pages/Browse Movies';
import Contact from './Pages/Contact';
import Dcma from './Pages/Dcma';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Request from './Pages/Request';
import Rss from './Pages/Rss';
import Searchpage from './Pages/Searchpage';

function App() {

  

  return (
    <div className="App">
     <Switch>
      <Route path="/" exact={true}><Homepage /> </Route>
      <Route path="/api"><Api /></Route>
      <Route path="/blog"><Blog /></Route>
      <Route path="/browsemovies"> <BrowseMovies /></Route>
      <Route path="/contact"> <Contact /></Route>
      <Route path="/dcma"><Dcma/></Route>
      <Route path="/login"><Login /></Route>
      <Route path="/register"> <Register /></Route>
      <Route path="/request"><Request/></Route>
      <Route path="/rss"> <Rss /></Route>
      <Route path="/search"><Searchpage/></Route>
      </Switch>
    </div>
  );
}

export default App;
