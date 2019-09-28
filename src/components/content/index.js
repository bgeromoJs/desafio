import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Header, Button } from './styles';
import { BrowserRouter, Link } from 'react-router-dom';

import { repRequest, followersRequest, starredRequest } from '../../actions'
import Routes from '../../routes';
import api from '../../api';

const Content = () => {
  const [active, setActive] = useState('/');
  const [obj, setObj] = useState([]);
  const [starred, setStarred] = useState([]);
  const [follow, setFollow] = useState([]);
  const pathname = window.location.pathname
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)


  useEffect(() => {
    function loadRepositories() {
      api.get(`search/repositories?q=user:${user.userLogged}`)
        .then(response => {
          response.data.items.map((item, index) => {
            let a = obj
            a.push({id: item.id, name: item.name, created: item.created_at })
            setObj(a)
            requestContri(item.name, index)
            requestCommit(item.name, index)
          })
        })
    }
    function requestContri(name, index) {
      api.get(`repos/${user.userLogged}/${name}/stats/contributors`)
        .then(response => {
          let a = obj
          a[index] = {...a[index], contri: response.data[0].total}
          setObj(a)
        })
    }
    
    function requestCommit(name, index) {
      api.get(`search/commits?q=repo:${user.userLogged}/${name}+css`)
        .then(response => {
          let a = obj
          a[index] = {...a[index], commit: response.data.total_count}
          setObj(a)
          dispatch(repRequest(a))
        })
    }


    function requestFollowers() {
      api.get(`users/${user.userLogged}/followers`)
        .then(response=> {
          response.data.map((item, index) => {
            let a = follow
            a.push({name: item.login, picture: item.avatar_url})
            setFollow(a)

            requestDetail(item.login, index)
            requestStars(item.login, index)
            dispatch(followersRequest(follow))
          })
        })
      }
    function requestDetail(name, index) {
      api.get(`users/${name}`)
        .then(response => {
          let a = follow
          a[index] = {...a[index], company: response.data.company, location: response.data.location }
          setFollow(a)
        })
    }
    function requestStars(name, index) {
      api.get(`users/${name}/starred`)
        .then(response => {
          let a = follow
          a[index] = {...a[index], stars: response.data.length}
          setFollow(a)
          dispatch(followersRequest(follow))
        })
    }


    function requestStarreds() {
      api.get(`users/${user.userLogged}/starred`)
        .then(response=> {
          response.data.map((item, index) => {
            let a = starred
            a.push({name: item.name, created: item.created_at})
            setStarred(a)
            requestContriStar(item.name, index)
          })
        })
    }
    function requestContriStar(name, index) {
      api.get(`repos/${user.userLogged}/${name}/stats/contributors`)
        .then(response => {
          let a = starred
          a[index] = {...a[index], contri: response.data[0].total}
          setStarred(a)
          dispatch(starredRequest(starred))
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
