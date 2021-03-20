import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const IconLogin = styled.span`
  display: flex;
  margin-left: 10px;
  background: #c3c3c3;
  height: 36px;
  width: 36px;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
`;

export const LoginIcon = () => {
  return (
    <IconLogin>
      <FontAwesomeIcon
        icon={faUser}
        style={{ fontSize: 18 }}
        title="Login"
        data-testid="login"
      />
    </IconLogin>
  );
};

/** Pending... */
export const LoginMenuComponent = () => {
  return <></>;
};
