import React from 'react';
import Prod4 from "./../../asset/imges/prod4.jpg";
import Prod5 from "./../../asset/imges/prod5.jpg";
import Prod6 from "./../../asset/imges/prod6.jpg";

const TemplateEnergias = () => {
    return (
        <div>
        <div className="section-conatiner-Meteo">
        <div className="colImg-Energia"></div>
        <div className="colTexto-Meteo">
             <div className="containerTexto-Meteo">
                 <h1 className="tituloHome-Meteo">ENERGÍAS</h1>
                 <p className="texto-Meteo">
                 MGS diseña los sistemas automáticos de medición y adquisición para las aplicaciones solares, cumpliendo con los estándares internacionales de medición, además de trabajar en conjunto con nuestros clientes para determinar la instrumentación apropiada.</p>
             </div>
             <div className="logosMeteo">
                <div className="logosColMeteo">
                    <img src={Prod4} alt="Meteorología"/>
                    <p>ANEMÓMETRO<br></br> <span>P2546A MEASNET</span></p>
                </div>
                <div className="logosColMeteo">
                    <img src={Prod5} alt="Energías"/>
                    <p>PIRANÓMETRO<br></br> <span>SR20</span></p>
                </div>
                <div className="logosColMeteo">
                    <img src={Prod6} alt="Energías"/>
                    <p>VELETA<br></br> <span>020C</span></p>
                </div>
             </div>
        </div>
     </div>
        </div>
    );
};

export default TemplateEnergias;