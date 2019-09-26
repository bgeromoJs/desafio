import React, { useState, useEffect } from 'react';

import { Container, Header, Button } from './styles';
import { BrowserRouter, Link } from 'react-router-dom';

import Routes from '../../routes';


const Content = () => {
  const [active, setActive] = useState('/');
  const pathname = window.location.pathname
  return (
    <BrowserRouter>
      <Container>
        <Header>
          <Link style={{textDecoration: 'none'}} to="/" onClick={() => setActive('/')}>
            <Button isActive={pathname === '/' ? true : false}>MEUS REPOSITORIOS</Button>
          </Link>
          <Link style={{textDecoration: 'none'}} to="/favorites"  onClick={() => setActive('/favorites')}>
            <Button isActive={pathname === '/favorites' ? true : false} >REPOSITORIOS FAVORITOS</Button>
          </Link>
          <Link style={{textDecoration: 'none'}} to="/followers"   onClick={() => setActive('/followers')}>
            <Button isActive={pathname === '/followers' ? true : false}>SEGUIDORES</Button>
          </Link>
        </Header>
        <Routes/>      
      </Container>
    </BrowserRouter>
  );
}

export default Content;
