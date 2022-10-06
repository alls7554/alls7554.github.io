import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/themeProvider';

const Header = () => {

  const [ThemeMode, toggleTheme] = useTheme();

  return (
      <ToggleButton className="toggleSwitch" onClick={toggleTheme}>
        <span>
        {ThemeMode === 'dark' ? "🌚" : '🌞'}
        </span>
      </ToggleButton>
  );
};
const ToggleButton = styled.button`
  position: fixed;
  z-index: 9999;
  bottom: 4%;
  right: 3%;

  background-color: ${props => props.theme.bgColor};
  border: ${props => props.theme.borderColor};
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 3rem;
  border-radius: 30px;

  cursor: pointer;

  box-shadow: ${
    props => props.mode === 'dark' ? '0px 5px 10px rgba(40, 40, 40, 1), 0px 2px 4px rgba(40, 40, 40, 1)'
    : '0 5px 10px rgba(100, 100, 100, 0.15), 0 2px 4px rgba(100, 100, 100, 0.15)'
  }
`

export default Header;
