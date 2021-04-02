import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import VideoDetailPage from '../pages/VideoDetail';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={VideoDetailPage} path="/detail/:id" exact />
        <Route component={NotFound} path="*" />
      </Switch>
    </Layout>
  </BrowserRouter>
);
export default Router;
