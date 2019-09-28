import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import Spinner from 'react-spinner-material';
import { 
  Container, 
  RepositoriesItem, 
  Content, 
  FavoritesItem, 
  FollowersItem,
  Image,
  LeftContent,
  SpinnerContainer
} from './styles';

export const Repositories = () => {
  const rep = useSelector(state => state.rep.repositories) || []

  return (
    <Container>
      {rep.length === 0 || rep === 'undefined'
        ? <SpinnerContainer>
            <Spinner size={60} spinnerColor={"#333"} spinnerWidth={1} visible={true} />
          </SpinnerContainer>
        : rep.map(item => (
        <RepositoriesItem key={item.name}>
          <Content>nome do repositório: {item.name ? item.name : null} </Content>
          <Content>data de criação do repositório(dd-mm-aaaa, hh:mm:ss): {item.created  ? new Date(item.created).toLocaleString() : null}</Content>  
          <Content>total de contribuições: {item.contri ? item.contri : null}</Content>  
          <Content>total de commits: {item.commit ? item.commit : 0}</Content>  
        </RepositoriesItem>
      ))}
    </Container>
  );
}

export const Favorites = () => {
  const rep = useSelector(state => state.starred.starreds) || []

  return (
    <Container>
      {rep.length === 0 || rep === 'undefined'
        ? <SpinnerContainer>
            <Spinner size={60} spinnerColor={"#333"} spinnerWidth={1} visible={true} />
          </SpinnerContainer>
        : rep.map(item => (
          <FavoritesItem key={item.name}>
            <Content>nome do repositório: {item.name ? item.name : null} </Content>
            <Content>data de criação do repositório(dd-mm-aaaa, hh:mm:ss): {item.created  ? new Date(item.created).toLocaleString() : null}</Content>  
            <Content>total de contribuições: {item.contri ? item.contri : 0}</Content>  
          </FavoritesItem>
        ))
      }
    </Container>
  );
}

export const Followers = () => {
  const follow = useSelector(state => state.follow.followers) || []
  
  useEffect(() => {
        /*eslint-disable */
  },[follow])
  return (
    <Container>
      {follow.length == 0 || follow == 'undefined'
        ? <SpinnerContainer>
            <Spinner size={60} spinnerColor={"#333"} spinnerWidth={1} visible={true} />
          </SpinnerContainer>
        : follow.map(item => (
            <FollowersItem key={item.name}>
              <LeftContent>
                <Content>nome do seguidor: {item.name}</Content>
                <Content>empresa: {item.company}</Content>  
                <Content>localização: {item.location}</Content>  
                <Content>total de repositórios com estrela ou curtido: {item.stars}</Content> 
              </LeftContent>
              <Image src={item.picture}/>
            </FollowersItem>
          ))
      }
    </Container>
  );
}
