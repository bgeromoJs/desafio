import React from 'react';
import {useSelector} from 'react-redux';
import { Container } from './styles';

import Profile from '../components/profile';
import Content from '../components/content';

const Wrapper = () => {
  const user = useSelector(state => state.user)
  return (
    <Container>
      <Profile user={user.userLogged}/>
      <Content />
    </Container>
  );
}

export default Wrapper;
