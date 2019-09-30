import styled from 'styled-components';

export const Container = styled.div`
  background: #c9c9c9;
  height: 90px;
  border-bottom: 1px solid #DDD
`;

export const Content = styled.div`
  width: 100%;
  max-width: 85%;
  margin: auto;
  padding: 27px;

  display: flex;
  align-self: center;
  justify-content: space-between;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UserContent = styled.div`
  padding: 0px 0px 0px 10px;
  flex-direction: row;
  align-self: center;
`;

export const Input = styled.div`
  color: ${props => props.color ? props.color : '#555'};
  flex-direction: row;
  margin-bottom: 3px;
  font-size: ${props => props.size ? props.size : '11px'};
  font-weight: bold;
`;

export const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: #000;
`;
