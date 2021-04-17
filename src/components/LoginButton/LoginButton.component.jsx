import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { IconLogin } from './Login.styled';

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
