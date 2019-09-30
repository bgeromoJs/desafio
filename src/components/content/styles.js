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
  background: #fff;
  border-width: 0.5;
  border-style: solid;
  border-color: ${props => props.isActive ? '#555': '#ddd' };
  width: 260px;
  height: 55px;
  border-radius: 10px;
  ${props => props.isActive ? 'box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important' : 'none'};
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