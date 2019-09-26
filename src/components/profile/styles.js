import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  height: 620px;
  background: #fff;
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  padding: 30px 14px 30px 14px;
  align-self: flex-start;
`;

export const Picture = styled.img`
  width: 85%;
  border-radius: 100%;
  align-self: center;
  margin-bottom: 32px;
`;

export const Description = styled.div`
  padding: 20px;
  border-bottom: solid 1px #ddd;
  color: #888;
  font-weight: bold;
`;
