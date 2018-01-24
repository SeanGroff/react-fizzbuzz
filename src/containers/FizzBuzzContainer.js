import React, { Component } from 'react';

import FizzBuzz from '../components/FizzBuzz';

export default class FizzBuzzContainer extends Component {
  state = {
    count: 0,
    fizzBuzz: '',
  };

  _fizzBuzz = num => {
    let fizzBuzz = '';

    if (num === 0) return fizzBuzz;
    if (!(num % 3)) fizzBuzz += 'Fizz';
    if (!(num % 5)) fizzBuzz += 'Buzz';

    return fizzBuzz;
  };

  _handleIncrementClick = () => {
    if (this.state.count === 100) return;

    this.setState(prevState => ({
      count: prevState.count + 1,
      fizzBuzz: this._fizzBuzz(prevState.count + 1),
    }));
  };

  _handleDecrementClick = () => {
    if (this.state.count === 0) return;

    this.setState(prevState => ({
      count: prevState.count - 1,
      fizzBuzz: this._fizzBuzz(prevState.count - 1),
    }));
  };

  render() {
    return (
      <FizzBuzz
        count={this.state.count}
        fizzBuzz={this.state.fizzBuzz}
        handleIncrementClick={this._handleIncrementClick}
        handleDecrementClick={this._handleDecrementClick}
      />
    );
  }
}
