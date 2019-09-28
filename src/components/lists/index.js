import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import api from '../../api';
import { 
  Container, 
  RepositoriesItem, 
  Content, 
  FavoritesItem, 
  FollowersItem,
  Image,
  LeftContent
} from './styles';
import { followersRequest } from '../../actions';

export const Repositories = () => {
  const rep = useSelector(state => state.rep.repositories) || []

  return (
    <Container>
      {rep.map(item => (
        <RepositoriesItem key={item.id}>
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
      {rep.map(item => (
        <RepositoriesItem key={item.id}>
          <Content>nome do repositório: {item.name ? item.name : null} </Content>
          <Content>data de criação do repositório(dd-mm-aaaa, hh:mm:ss): {item.created  ? new Date(item.created).toLocaleString() : null}</Content>  
          <Content>total de contribuições: {item.contri ? item.contri : 0}</Content>  
        </RepositoriesItem>
      ))}
    </Container>
  );
}

export const Followers = () => {
  const follow = useSelector(state => state.follow.followers) || []
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  
  useEffect(() => {
        /*eslint-disable */
  },[follow])
  return (
    <Container>
      {
        follow.map(item => (
          <FollowersItem>
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
