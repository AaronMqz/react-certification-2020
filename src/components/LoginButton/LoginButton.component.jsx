import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { IconLogin } from './Login.styled';
import { useModal } from '../../utils/hooks/useModal';
import { LoginForm } from '../LoginForm';
import { useAuthContext } from '../../utils/store/context';

export const LoginIcon = () => {
  const { logout, user } = useAuthContext();
  const { show, hide, RenderModal } = useModal();

  return (
    <IconLogin>
      <FontAwesomeIcon
        icon={user ? faSignOutAlt : faSignInAlt}
        style={{ fontSize: 24 }}
        title={user ? 'Sign Out' : 'Sign In'}
        data-testid="login"
        onClick={user ? logout : show}
      />
      <RenderModal onClick={hide}>
        <LoginForm closeModal={hide} />
      </RenderModal>
    </IconLogin>
  );
};
