import React, { Component } from 'react'
import { BrowserRouter, Switch , Route } from "react-router-dom";
import Home from "./Home"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


class Halaman404 extends Component{
    render() {
        return (
          <div>
            <p>Halaman 404</p>
          </div>
        );
    }
}

export default Halaman404