import React, { Component } from 'react';
import Header from '../componentes/layout/Header';
import TemplatesMeteo from './../componentes/Templates/TemplatesMeteo';

class Meteo extends Component {
  render() {
    return (
      <div className="page">
      <Header/>
       <TemplatesMeteo/>
      </div>
    );
  }
}

export default Meteo;