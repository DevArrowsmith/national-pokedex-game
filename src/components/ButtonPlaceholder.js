import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButtonPlaceholder = styled.button`
  width: 70px;
  height: 40px;
  margin: 0 5px;
  padding: 0 10px;
  border-radius: 10px;
  color: maroon;
  font-family: 'Bungee', sans-serif;
  border: none;
  background-color: white;
`;

const ButtonPlaceholder = ({ mode }) => (
  <StyledButtonPlaceholder deactivated>
    {mode}
  </StyledButtonPlaceholder>
);

ButtonPlaceholder.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default ButtonPlaceholder;
