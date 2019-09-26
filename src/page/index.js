import React from 'react';

import { Container } from './styles';

import Profile from '../components/profile';
import Content from '../components/content';

const Wrapper = () => {
  return (
    <Container>
      <Profile />
      <Content />
    </Container>
  );
}

export default Wrapper;
