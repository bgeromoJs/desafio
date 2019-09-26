import React from 'react';

import { Container, Picture, Description } from './styles';

const Profile = () => {
  return (
    <Container>
      <Picture src={'https://image.freepik.com/icones-gratis/github-circulou_318-10752.jpg'}/>
      <Description>RESUME</Description>
      <Description>NOME Login</Description>
      <Description>EMAIL</Description>
      <Description>LOCALIZAÇÃO</Description>
      <Description style={{borderBottomWidth: 0}}>EMPRESA</Description>
    </Container>
  );
}

export default Profile;
