import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: #282828;
  height: 55px;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const AlignLeft = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const AlignRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
`;

export { Header, AlignLeft, AlignRight };
