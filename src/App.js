import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Berita from "./Comp/Berita";
import BeritaDetail from "./Comp/BeritaDetail";
import Halaman404 from "./Comp/Hamana404";
import Home from "./Comp/Home";



class App extends Component {
  

  render() {
    return (
      <BrowserRouter>
        
          <nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/berita">Berita</Link>
            </li>
          </nav>
          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/berita" exact component={Berita} />
              <Route path="/berita/:judul" exact component={BeritaDetail} />
              <Route component={Halaman404}/>
            </Switch>
          </main>
      </BrowserRouter>
    );
  }
}

export default App;
