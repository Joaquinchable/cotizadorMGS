import React from 'react';
import ico1 from "./../../asset/imges/ico1-01.svg";
import ico2 from "./../../asset/imges/ico2.svg";
import ico3 from "./../../asset/imges/ico3.svg";
import ico4 from "./../../asset/imges/ico4.svg";

const TemplateHome = () => {
    return (
        <div>
        <div className="section-conatiner-padre">
        <div className="colImg"></div>
        <div className="colTexto">
             <div className="containerTexto">
                 <h1 className="tituloHome">METEO GREEN SYSTEMS</h1>
                 <p className="texto">
                 MGS es una empresa de profesionales dedicados a proporcionar consultoría en tecnologías de la información, telecomunicaciones, energías renovables e instrumentación meteorológica. Siempre con el compromiso de ofrecer una solución integral, maximizando la optimización de recursos y aplicando las nuevas tendencias tecnológicas, siempre tomando en cuenta las necesidades del cliente.
                 </p>
             </div>
             <div className="logos">
                 <div className="logosCol">
                     <img src={ico1} alt="Meteorología"/>
                 </div>
                 <div className="logosCol">
                     <img src={ico2} alt="Energías"/>
                 </div>
                 <div className="logosCol">
                     <img src={ico3} alt="Energías"/>
                 </div>
                 <div className="logosCol">
                     <img src={ico4} alt="Energías"/>
                 </div>                     
             </div>
        </div>
     </div>
        </div>
    );
};

export default TemplateHome;