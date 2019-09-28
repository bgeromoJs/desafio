import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/header'
import { loginRequest } from './actions'
import Wrapper from './page'
import './global.css';
import axios from 'axios';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    async function loadRepositories() {
      const response = await axios.get('https://api.github.com/users/octocat');
      dispatch(loginRequest(response.data))
    }
    loadRepositories();
    /*eslint-disable */
  }, []);
  return (
    <>
      <Header/>
      <Wrapper/>  
    </>
  )
}

export default (App);