import React from 'react';

import { Container, Picture, Description } from './styles';

const Profile = () => {
  return (
    <Container>
      <Picture src={'https://image.freepik.com/icones-gratis/github-circulou_318-10752.jpg'}/>
      <Description>RESUME</Description>
      <Description renderDelay='100ms'>NOME Login</Description>
      <Description renderDelay='200ms'>EMAIL</Description>
      <Description renderDelay='300ms'>LOCALIZAÇÃO</Description>
      <Description renderDelay='400ms' style={{borderBottomWidth: 0}}>EMPRESA</Description>
    </Container>
  );
}

export default Profile;
