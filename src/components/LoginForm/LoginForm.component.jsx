import React, { useRef, useEffect } from 'react';
import { Form } from './LoginForm.styled';
import { useAuthContext } from '../../utils/store/context';

export const LoginForm = ({ closeModal }) => {
  const { login, error, user } = useAuthContext();
  const username = useRef('');
  const password = useRef('');

  const handleLogin = () => {
    const authValues = {
      user: username.current.value,
      password: password.current.value,
    };
    login(authValues);
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  useEffect(() => {
    if (user) {
      closeModal();
    }
  }, [user, closeModal]);

  return (
    <Form.Container onKeyDown={handleEnterKey} data-testid="login_form">
      <Form.InputGroup>
        <Form.Input
          ref={username}
          type="text"
          placeholder="User"
          data-testid="input-user"
        />
        <Form.Input
          ref={password}
          type="password"
          placeholder="Password"
          data-testid="input-password"
        />
      </Form.InputGroup>
      {error !== '' && <Form.LabelError>{error}</Form.LabelError>}
      <Form.ButtonsGroup>
        <Form.Button onClick={handleLogin}>Login</Form.Button>
        <Form.ButtonFlat onClick={closeModal}>Cancel</Form.ButtonFlat>
      </Form.ButtonsGroup>
    </Form.Container>
  );
};
