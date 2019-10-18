import React, { Component } from 'react';


class Toggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleStatus: true
    };

    this.hendelClick = this.hendelClick.bind(this);
  }

  hendelClick() {
    this.setState(state => ({
      toggleStatus: !state.toggleStatus
    }));
  }

  render() {
    return (
      <button onClick={this.hendelClick}>
        {this.state.toggleStatus ? "ON" : "OFF"}
      </button>
    );
  }
}

export default Toggle;