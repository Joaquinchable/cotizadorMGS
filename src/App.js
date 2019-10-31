import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Comunicacion from './pages/Comunicacion';
import Meteo from './pages/Meteo';
import Energias from './pages/Energias';
import Servicios from './pages/Servicios';
import PageError from './pages/PageError';
import Contacto from './pages/Contacto';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <BrowserRouter>
      <Redirect
      from="/"
      to="/home" />
      <Switch>
        <Route exact path = "/Home" component = {Home}/>
        <Route exact path = "/Comunicacion" component ={Comunicacion}/>
        <Route exact path = "/Meteo" component = {Meteo}/>
        <Route exact path = "/Energias" component = {Energias}/>
        <Route exact path = "/Servicios" component = {Servicios}/>
        <Route exact path = "/Contacto" component = {Contacto}/>
        <Route component={PageError} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
