import React, { Component } from 'react';
import { link } from 'fs';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Berita extends Component{
    constructor(props){
        super(props)

        this.state = {
            items : [] , 
            isLoading : true
        }
        this.hendelClik = this.hendelClik.bind(this)
    }

    componentDidMount() {
        this.getUser()
    }

    hendelClik = e => {
        e.preventDefault()
        // this.getUser()
    }

    getUser(){
        return fetch("https://jsonplaceholder.typicode.com/todos")
          .then(r => r.json())
          .then(data => this.setState({ items: data, isLoading: false }));
    } 

    render() {
        const {items , isLoading} = this.state
        
        if(isLoading){
            return(
                <p>Loading ......</p>
            )
        }

        return (
          <React.Fragment>
            <h3>List Berita</h3>
            <button onClick={this.hendelClik}>Get Data Beritaa</button>
            <ul>
              {items.map((item, index) => (
                <div key={item.id}>
                  <li>
                    <Link to={"/berita/" + item.title}>{item.title}</Link>
                  </li>
                </div>
              ))}
            </ul>
          </React.Fragment>
        );
    }

}

export default Berita;