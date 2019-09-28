import React from 'react';

import { Container, Picture, Description } from './styles';

const Profile = (props) => {
  const { 
    bio, 
    name, 
    email, 
    location, 
    company, 
    avatar_url
  } = props.user
  return (
    <Container>
      <Picture src={avatar_url}/>
      <Description>{bio ? bio : 'Sem descrição...'}</Description>
      <Description renderDelay='100ms'>{name ? name : 'Sem nome...'}</Description>
      <Description renderDelay='200ms'>{email ? email : 'Sem email...'}</Description>
      <Description renderDelay='300ms'>{location ? location : 'Sem localização...'}</Description>
      <Description renderDelay='400ms' style={{borderBottomWidth: 0}}>{company ? company : 'Sem companhia...'}</Description>
    </Container>
  );
}

export default Profile;
