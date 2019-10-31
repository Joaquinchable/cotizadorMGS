import React from 'react';

const Clima = () => {
    return (
        <div>
        <p class="t2" align="center"> Condiciones Meteorológicas Actuales</p>
        <hr align="center" width="50%" noshade color="#004168">
        
             <p class="p2" align="center"><strong>Intensidad del Viento:</strong>  0.0 km/hr </p>
             <p class="p2" align="center"><strong>Dirección del Viento:</strong> 106 º </p>
             <p class="p2" align="center"><strong>Temperatura Ambiente:</strong> 22.5 °C </p>
             <p class="p2" align="center"><strong>Humedad Relativa:</strong> 100 %  </p>
             <p class="p2" align="center"><strong>Presión Barométrica:</strong> 782.0 mB </p>
             <p class="p2" align="center"><strong>Radiación Solar:</strong> --- W/m² </p>
             <p class="p2" align="center"><strong>LLuvia hoy:</strong> 0.0 mm </p>
             <!-- www.TuTiempo.net - Ancho:452px - Alto:89px --> 
        </div>
    );
};

export default Clima;