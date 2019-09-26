import React from 'react';

import { Container, Header, Button } from './styles';

import {Repositories, Favorites, Followers} from '../lists'

const Content = () => {
  return (
    <Container>
      <Header>
        <Button>MEUS REPOSITORIOS</Button>
        <Button>REPOSITORIOS FAVORITOS</Button>
        <Button>SEGUIDORES</Button>
      </Header>
      <Followers/>
    </Container>
  );
}

export default Content;
