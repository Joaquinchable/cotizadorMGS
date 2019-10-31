import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Meteo from './pages/Meteo';
import Energias from './pages/Energias';
import PageError from './pages/PageError';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Footer from './componentes/layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <BrowserRouter>
      <Redirect
      from="/"
      to="/home" />
      <Switch>
        <Route exact path = "/Home" component = {Home}/>
        <Route exact path = "/Nosotros" component = {Nosotros}/>
        <Route exact path = "/Meteo" component = {Meteo}/>
        <Route exact path = "/Energias" component = {Energias}/>
        <Route exact path = "/Contacto" component = {Contacto}/>
        <Route component={PageError} />
      </Switch>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
