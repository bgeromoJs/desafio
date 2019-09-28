import styled, {keyframes} from 'styled-components';

const move = keyframes`
  from {
    opacity: 0;
    transform: translateX(-35%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;


export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const Container = styled.div`
  overflow: hidden;
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
  animation: ${move} ${props => props.renderDelay || "50ms"} linear;
  padding: 20px;
  border-bottom: solid 1px #ddd;
  color: #888;
  font-weight: bold;
`;
