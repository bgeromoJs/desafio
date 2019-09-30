import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Header, Button } from './styles';
import { BrowserRouter, Link } from 'react-router-dom';

import { repRequest, followersRequest, starredRequest } from '../../actions'
import Routes from '../../routes';
import api from '../../api';
import {auth} from '../../auth';

const Content = () => {
  const [active, setActive] = useState('/');
  const [obj, setObj] = useState([]);
  const [starred, setStarred] = useState([]);
  const [follow, setFollow] = useState([]);
  const pathname = window.location.pathname
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)


  useEffect(() => {

    // Repositories request
    function loadRepositories() {
      api.get(`search/repositories?q=user:${user.userLogged}`)
        .then(response => {
          response.data.items.map((item, index) => {
            let a = obj
            a.push({id: item.id, name: item.name, created: item.created_at })
            setObj(a)
            requestContri(item.name, index)
            requestCommit(item.name, index)
            return a
          })
        })
    }
    function requestContri(name, index) {
      api.get(`repos/${user.userLogged}/${name}/stats/contributors?${auth}`)
        .then(response => {
          let a = obj
          a[index] = {...a[index], contri: response.data[0].total}
          setObj(a)
          return a
        })
    }
    
    function requestCommit(name, index) {
      api.get(`/repos/${user.userLogged}/${name}/commits?${auth}`)
        .then(response => {
          let a = obj
          a[index] = {...a[index], commit: response.data.length}
          setObj(a)
          dispatch(repRequest(a))
          return a
        })
    }



    // Followers request
    function requestFollowers() {
      api.get(`users/${user.userLogged}/followers?${auth}`)
        .then(response=> {
          response.data.map((item, index) => {
            let a = follow
            a.push({name: item.login, picture: item.avatar_url})
            setFollow(a)

            requestDetail(item.login, index)
            requestStars(item.login, index)
            dispatch(followersRequest(follow))
            return a
          })
        })
      }
    function requestDetail(name, index) {
      api.get(`users/${name}?${auth}`)
        .then(response => {
          let a = follow
          a[index] = {...a[index], company: response.data.company, location: response.data.location }
          setFollow(a)
          return a
        })
    }
    function requestStars(name, index) {
      api.get(`users/${name}/starred?${auth}`)
        .then(response => {
          let a = follow
          a[index] = {...a[index], stars: response.data.length}
          setFollow(a)
          dispatch(followersRequest(follow))
          return a
        })
    }

    // Starred Request
    function requestStarreds() {
      api.get(`users/${user.userLogged}/starred?${auth}`)
        .then(response=> {
          response.data.map((item, index) => {
            let a = starred
            a.push({name: item.name, created: item.created_at})
            setStarred(a)
            requestContriStar(item, index)
            return a
          })
        })
    }
    function requestContriStar(item, index) {
      api.get(`repos/${item.owner.login}/${item.name}/stats/contributors?${auth}`)
        .then(response => {
          let a = starred
          a[index] = {...a[index], contri: response.data[0].total}
          setStarred(a)
          dispatch(starredRequest(starred))
          return a
        })
    }


    requestStarreds();

    requestFollowers();

    loadRepositories();
    /*eslint-disable */
  }, []);

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
