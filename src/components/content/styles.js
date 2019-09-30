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
  /* background: ${props => props.isActive ? '#b7b7b7': '#ddd' };
  color: ${props => props.isActive ? '#5a5760': '#111' }; */
  border-width: 0.5;
  border-style: solid;
  border-color: ${props => props.isActive ? '#555': '#ddd' };
  width: 260px;
  height: 55px;
  border-radius: 10px;

  padding: 17px 20px 20px 20px;
  text-align: center;

  font-size: 15px;
  font-weight: bold;

  color: ${props => props.isActive ? '#222': '#555' };

  &:hover {
    border-color: #222;
    color: #222;
  }
`;