import React from 'react';

import { Container, Header, Button } from './styles';
import { BrowserRouter, Link } from 'react-router-dom';

import Routes from '../../routes';

const Content = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header>
          <Link style={{textDecoration: 'none'}} to="/">
            <Button>MEUS REPOSITORIOS</Button>
          </Link>
          <Link style={{textDecoration: 'none'}} to="/favorites">
            <Button>REPOSITORIOS FAVORITOS</Button>
          </Link>
          <Link style={{textDecoration: 'none'}} to="/followers">
            <Button>SEGUIDORES</Button>
          </Link>
        </Header>
          <Routes/>      
      </Container>
    </BrowserRouter>
  );
}

export default Content;
