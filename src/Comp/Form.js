import React, { Component } from 'react';
import { default as Timer } from "./Detik";
import { default as List } from "./List";
import { default as Toggle } from "./Toggle";

class Form extends Component {
  constructor(proos) {
    super(proos);
    this.state = {
      nowItem: "",
      items: []
    };
  }

  hendelSubmit = e => {
    e.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.nowItem],
      nowItem: ""
    });
  };

  hendelChange = e => {
    this.setState({
      nowItem: e.target.value
    });
  };

  render() {
    return (
      <div >
      <Timer awal="0"/>
      <Toggle/>
        <form onSubmit={this.hendelSubmit}>
          <input
            value={this.state.nowItem}
            onChange={this.hendelChange}
          ></input>
          <button>Add</button>
        </form>

        <List items={this.state.items} />
      </div>
    );
  }
}

export default Form;