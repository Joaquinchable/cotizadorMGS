import React from 'react';
import Prod1 from "./../../asset/imges/prod1.jpg";
import Prod2 from "./../../asset/imges/prod2.jpg";
import Prod3 from "./../../asset/imges/prod3.jpg";

const TemplatesMeteo = () => {
    return (
        <div>
        <div className="section-conatiner-Meteo">
        <div className="colImg-Meteo"></div>
        <div className="colTexto-Meteo">
             <div className="containerTexto-Meteo">
                 <h1 className="tituloHome-Meteo">METEOROLOGÍA</h1>
                 <p className="texto-Meteo">
                 MGS ofrece estaciones meteorológicas con grado de investigación para distintas aplicaciones como son: agricultura, ecología y medio ambiente, nuestros sistemas son completamente automáticos y personalizados a la necesidad especifica de nuestros clientes.                 </p>
             </div>
             <div className="logosMeteo">
                <div className="logosColMeteo">
                    <img src={Prod1} alt="Meteorología"/>
                    <p>ESTACIÓN METEOROLÓGICA<br></br> <span>GRSW100</span></p>
                </div>
                <div className="logosColMeteo">
                    <img src={Prod2} alt="Energías"/>
                    <p>CAMARA METEOROLÓGICA <br></br> <span>CC5MPX</span></p>
                </div>
                <div className="logosColMeteo">
                    <img src={Prod3} alt="Energías"/>
                    <p>VISIBILÍMETRO<br></br> <span>CS120A</span></p>
                </div>
             </div>
        </div>
     </div>
        </div>
    );
};

export default TemplatesMeteo;