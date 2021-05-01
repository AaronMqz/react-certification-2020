import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { IconMenu } from './Menu.styled';

export const MenuIcon = ({ handleClick }) => {
  return (
    <IconMenu onClick={handleClick} data-testid="iconMenuClick">
      <FontAwesomeIcon
        icon={faHome}
        style={{ fontSize: 25, color: 'white', cursor: 'pointer' }}
        title="Menu"
        data-testid="menu"
      />
    </IconMenu>
  );
};
