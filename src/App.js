import React from 'react';
import {BrowserRouter, Route, Switch, redirect} from 'react-router-dom';
import home from './pages/home';
import comunicacion from './pages/comunicacion';
import meteo from './pages/meteo';
import eolico from './pages/eolico';
import servicios from './pages/servicios';
import PageError from './pages/PageError';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/home" component = {home}/>
        <Route exact path = "/comunicacion" component ={comunicacion}/>
        <Route exact path = "/meteo" component = {meteo}/>
        <Route exact path = "/eolico" component = {eolico}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
