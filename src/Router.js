import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './pages/App';
import Detalhe from './pages/Detalhe';


// Layouts
import Layout from './Layout';

const Router  = () =>{
  return(
  <Switch>
    <Route path="/" exact component={App}  />
    <Route path="/detalhe/:id" component={Detalhe} layout={Layout.Container} />
  </Switch>
  )
}

export default Router;