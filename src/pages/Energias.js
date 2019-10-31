import React, { Component } from 'react';
import Header from './../componentes/layout/Header';
import TemplateEnergias from './../componentes/Templates/TemplateEnergias'

class Energias extends Component {
  render() {
    return (
      <div className="page">
      <Header/>
    <TemplateEnergias/>
      </div>
    );
  }
}

export default Energias;