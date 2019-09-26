import styled from 'styled-components';

export const Container = styled.div`
  width: 890px;
  height: 750px;
  align-self: flex-start;
  padding: 0px 30px 30px 30px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.div`
  cursor: pointer;
  background: #ddd;
  color: #111;
  width: 260px;
  height: 55px;
  border-radius: 5px;

  padding: 20px;
  text-align: center;

  font-size: 15px;
  font-weight: bold;

  color: #fff;

  &:hover {
    background: #b7b7b7;
    color: #5a5760;
  }
`;