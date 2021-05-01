import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import VideoDetailPage from '../pages/VideoDetail';
import NotFound from '../pages/NotFound';
import Favorites from '../pages/Favorites';
import FavoriteDetail from '../pages/FavoriteDetail';
import Layout from '../components/Layout';
import PrivateRoute from './privateRoute';

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={VideoDetailPage} path="/detail/:id" exact />
        <PrivateRoute component={Favorites} path="/favorites" exact />
        <PrivateRoute component={FavoriteDetail} path="/favorites/detail/:id" exact />
        <Route component={NotFound} path="*" />
      </Switch>
    </Layout>
  </BrowserRouter>
);
export default Router;
