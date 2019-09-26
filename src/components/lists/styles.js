import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 0px 0px 0px;
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
  flex-direction: column;
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
  align-self: flex-end;
  position: fixed;
`;