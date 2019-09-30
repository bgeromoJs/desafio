import React, {useEffect, useState} from 'react';
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
  const [list, setList] = useState([])
  
  useEffect(() => {
    setList(rep)
    /*eslint-disable */
  },[rep])

  return (
    <Container>
      {list.length === 0 || list === 'undefined'
        ? <SpinnerContainer>
            <Spinner size={60} spinnerColor={"#333"} spinnerWidth={1} visible={true} />
          </SpinnerContainer>
        : list.map(item => (
        <RepositoriesItem key={item.name}>
          <Content>nome do repositório: {item.name ? item.name : 'Sem nome...'} </Content>
          <Content>data de criação do repositório(dd-mm-aaaa, hh:mm:ss): {item.created  ? new Date(item.created).toLocaleString() : null}</Content>  
          <Content>total de contribuições: {item.contri ? item.contri : 0}</Content>  
          <Content>total de commits: {item.commit ? item.commit : 0}</Content>  
        </RepositoriesItem>
      ))}
    </Container>
  );
}

export const Favorites = () => {
  const rep = useSelector(state => state.starred.starreds) || []
  const [list, setList] = useState([])
  
  useEffect(() => {
    setList(rep)
    /*eslint-disable */
  },[rep])

  return (
    <Container>
      {list.length === 0 || list === 'undefined'
        ? <SpinnerContainer>
            <Spinner size={60} spinnerColor={"#333"} spinnerWidth={1} visible={true} />
          </SpinnerContainer>
        : list.map(item => (
          <FavoritesItem key={item.name}>
            <Content>nome do repositório: {item.name ? item.name : 'Sem nome...'} </Content>
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
  const [list, setList] = useState([])
  
  useEffect(() => {
    setList(follow)
    /*eslint-disable */
  },[follow])
  return (
    <Container>
      {list.length == 0 || list == 'undefined'
        ? <SpinnerContainer>
            <Spinner size={60} spinnerColor={"#333"} spinnerWidth={1} visible={true} />
          </SpinnerContainer>
        : list.map(item => (
            <FollowersItem key={item.name}>
              <LeftContent>
                <Content>nome do seguidor: {item.name ? item.name : 'Sem nome...'}</Content>
                <Content>empresa: {item.company ? item.company : 'Sem empresa...'}</Content>  
                <Content>localização: {item.location ? item.location : 'Sem localização...'}</Content>  
                <Content>total de repositórios com estrela ou curtido: {item.stars ? item.stars : 0}</Content> 
              </LeftContent>
              <Image src={item.picture}/>
            </FollowersItem>
          ))
      }
    </Container>
  );
}
