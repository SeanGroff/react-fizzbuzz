import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import PlusMinusButton from './PlusMinusButton';

const Wrapper = styled.div`
  background-color: #e1e2e1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #009688;
  color: #e0f2f1;
  height: 70px;
  width: 100%;
`;

const Counter = styled.div`
  color: #ff6090;
  font-size: 64px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0;
  background-color: #f5f5f6;
  width: 100%;
`;

export default function FizzBuzz({
  count,
  fizzBuzz,
  handleDecrementClick,
  handleIncrementClick,
}) {
  return (
    <Wrapper className="App">
      <Header>
        <h1>React FizzBuzz</h1>
      </Header>
      <Counter>{fizzBuzz || count}</Counter>
      <ButtonsWrapper>
        <PlusMinusButton onClick={handleDecrementClick}>{'-'}</PlusMinusButton>
        <PlusMinusButton onClick={handleIncrementClick}>{'+'}</PlusMinusButton>
      </ButtonsWrapper>
    </Wrapper>
  );
}

FizzBuzz.propTypes = {
  count: PropTypes.number.isRequired,
  fizzBuzz: PropTypes.string.isRequired,
  handleDecrementClick: PropTypes.func.isRequired,
  handleIncrementClick: PropTypes.func.isRequired,
};
