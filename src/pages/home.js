import React, { Component } from 'react';
import TemplateHome from './../componentes/Templates/TemplateHome';
import Header from '../componentes/layout/Header';

class Home extends Component {
  render() {
    return (
      <div className="page">
      <Header/>
      <TemplateHome/>      
      </div>
    );
  }
}

export default Home;