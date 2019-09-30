import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux'; 
import {Container, Content, UserContainer, Image, UserContent, Input} from './styles';

const Header = () =>{
  const user = useSelector(state => state.user)
  const [userListener, setUserListener] = useState([])
  
  useEffect(() => {
    setUserListener(user.userLogged)
    /*eslint-disable */
  },[user])


  return (
    <Container>
      <Content>
        <h1>LOGO</h1>
        <UserContainer>
          <Image src={userListener.avatar_url}/>
          <UserContent>
            <Input color={'#222'} size={'13px'}>{userListener.login}</Input>
            <Input>{userListener.company}</Input>
          </UserContent>
        </UserContainer>
      </Content>
    </Container>
  );
}

export default Header;