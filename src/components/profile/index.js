import React from 'react';
import Spinner from 'react-spinner-material';

import { Container, Picture, Description, SpinnerContainer } from './styles';
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
      {props.user === 'octocat'
        ? <SpinnerContainer>
            <Spinner size={60} spinnerColor={"#333"} spinnerWidth={1} visible={true} />
          </SpinnerContainer>
        : <>
            <Picture src={avatar_url}/>
            <Description>{bio ? bio : 'Sem descrição...'}</Description>
            <Description renderDelay='100ms'>{name ? name : 'Sem nome...'}</Description>
            <Description renderDelay='200ms'>{email ? email : 'Sem email...'}</Description>
            <Description renderDelay='300ms'>{location ? location : 'Sem localização...'}</Description>
            <Description renderDelay='400ms' style={{borderBottomWidth: 0}}>{company ? company : 'Sem companhia...'}</Description>
          </>
      }
    </Container>
  );
}

export default Profile;
