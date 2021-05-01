import styled from 'styled-components';

const Input = styled.input`
  border: 0;
  border-bottom: solid 2px;
  border-bottom-color: lightsteelblue;
  height: 30px;
  padding: 2px 5px;
  margin: 10px 0;
`;

const InputGroup = styled.div`
  display: flex;
  margin: 10px 0 10px 0;
  flex-direction: column;
  width: 100%;
`;

const Button = styled.div`
  border-radius: 2px;
  cursor: pointer;
  text-align: center;
  background: #3498db;
  color: white;
  font-size: 16px;
  padding: 5px;
`;

const ButtonFlat = styled.div`
  color: grey;
  cursor: pointer;
  font-size: 16px;
  align-self: center;
  margin-top: 10px;
`;

const ButtonsGroup = styled.div`
  display: flex;
  margin: 10px 0 10px 0;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  width: 100%;
`;
const LabelError = styled.p`
  color: lightcoral;
  margin: 5px;
  font-size: 15px;
`;

export const Form = {
  Input,
  Button,
  ButtonFlat,
  Container,
  ButtonsGroup,
  InputGroup,
  LabelError,
};
