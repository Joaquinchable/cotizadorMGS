import React, { Component } from 'react';
import Header from './../componentes/layout/Header';
import TemplateContactos from './../componentes/Templates/TemplatesContactos'

class Contacto extends Component {
  render() {
    return (
      <div className="page">
       <Header/>
       <TemplateContactos/>
       
      </div>
    );
  }
}

export default Contacto;