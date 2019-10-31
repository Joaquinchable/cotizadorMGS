import React from 'react';
import { Link } from 'react-router-dom';

const BarNav = () => {
    return (
        <div className="barnav-container">
                    <nav className="menu">
                        <ul className="navegacion">
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/nosotros">Nosotros</Link>
                            </li>
                            <li>
                                <Link to="/meteo">Meteorología</Link>
                            </li>
                            <li>
                                <Link to="/energias">Energías</Link>
                            </li>
                            <li>
                                <Link to="/contacto">Contacto</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
    );
};

export default BarNav;