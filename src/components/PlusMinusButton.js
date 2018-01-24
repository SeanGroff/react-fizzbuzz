import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  padding: 10px 50px;
  background-color: #e91e63;
  color: #fce4ec;
  font-weight: bold;
  font-size: 24px;
  outline: none;

  &:hover {
    cursor: pointer;
    background-color: #b0003a;
  }
`;

export default function PlusMinusButton({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}

PlusMinusButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
