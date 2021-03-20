import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const IconMenu = styled.span`
  display: flex;
  margin-right: 10px;
`;

export const MenuIcon = () => {
  return (
    <IconMenu>
      <FontAwesomeIcon
        icon={faBars}
        style={{ fontSize: 20, color: 'white' }}
        title="Menu"
        data-testid="menu"
      />
    </IconMenu>
  );
};

/** Pending... */
export const MenuComponent = () => {
  return <></>;
};
