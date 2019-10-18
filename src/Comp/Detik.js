import React, { Component } from 'react';
class Detik extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detik: props.awal
    };
  }

  componentDidMount() {
    this.addInterval = setInterval(() => this.incr(), 1000);
  }

  componentWillMount() {
    clearInterval(this.addInterval);
  }

  incr() {
    this.setState((state, props) => ({
      detik: parseInt(state.detik) + 1
    }));
  }

  render() {
    return <div>{this.state.detik} Detik</div>;
  }
}

export default Detik;