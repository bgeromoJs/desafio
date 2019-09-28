import styled, {keyframes} from 'styled-components';

const fade = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const LeftContent = styled.div``;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const Container = styled.div`
  overflow: hidden;
  padding: 50px 0px 0px 0px;
  animation: ${fade} 250ms linear;
`;

export const RepositoriesItem = styled.div`
  width: 100%;
  height: 150px;
  background: #ddd;
  border-radius: 20px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 25px;
`;

export const FavoritesItem = styled.div`
  width: 100%;
  height: 130px;
  background: #ddd;
  border-radius: 20px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 25px;
`;

export const FollowersItem = styled.div`
  width: 100%;
  height: 150px;
  background: #ddd;
  border-radius: 20px;
  padding: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  margin-bottom: 25px;
`;

export const Content = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
`;

export const Image = styled.img`
  height: 105px;
  width: 105px;
  border-radius: 100%;
`;