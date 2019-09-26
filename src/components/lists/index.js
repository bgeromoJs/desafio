import React from 'react';

import { 
  Container, 
  RepositoriesItem, 
  Content, 
  FavoritesItem, 
  FollowersItem,
  Image
} from './styles';

export const Repositories = (props) => {
  return (
    <Container>
      <RepositoriesItem>
        <Content>nome do repositório </Content>
        <Content>data de criação do repositório(dd-mm-aaaa, hh:mm:ss)</Content>  
        <Content>total de contribuições</Content>  
        <Content>total de commits</Content>  
      </RepositoriesItem>
    </Container>
  );
}

export const Favorites = () => {
  return (
    <Container>
      <FavoritesItem>
        <Content>nome do repositório </Content>
        <Content>data de criação do repositório(dd-mm-aaaa, hh:mm:ss)</Content>  
        <Content>total de contribuições</Content>  
      </FavoritesItem>
    </Container>
  );
}

export const Followers = () => {
  return (
    <Container>
      <FollowersItem>
        <Content>nome do seguidor</Content>
        <Content>empresa</Content>  
        <Content>localização</Content>  
        <Content>total de repositórios com estrela ou curtido</Content> 
        <Image src={'https://avatars2.githubusercontent.com/u/1555350?v=4'}/>
      </FollowersItem>
    </Container>
  );
}
