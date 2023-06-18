import React from 'react';     //necesaria en stackblitz 
import { Link } from "react-router-dom";
function Inicio() {
    return (
        <div className="mt-4 p-5 rounded" style={{ backgroundColor: "lightgray" }}>
  <h1>Entretenimiento 2023</h1>
  <p>Este ejemplo está desarrollado con las siguientes tecnologías:</p>
  <p>
    Backend: NodeJs, Express, WebApiRest, Swagger, Sequelize, Sqlite
    múltiples capas en Javascript/Typescript.
  </p>
  <p>
    Frontend: Single Page Application, HTML, CSS, Bootstrap, NodeJs,
    Javascript y React.
  </p>
  <div className="d-flex justify-content-start align-items-center">
    <Link to="/peliculas" className="btn btn-lg btn-primary">
      <i className="fa fa-film"></i> Ver Películas
    </Link>
    <span style={{ width: '10px' }}></span> {/* Espacio adicional */}
    <Link to="/series" className="btn btn-lg btn-primary">
      <i className="fa fa-film"></i> Ver Series
    </Link>
    <span style={{ width: '10px' }}></span> {/* Espacio adicional */}
    <Link to="/cortos" className="btn btn-lg btn-primary">
      <i className="fa fa-film"></i> Ver Cortos
    </Link>
    <span style={{ width: '10px' }}></span> {/* Espacio adicional */}
    <Link to="/actores" className="btn btn-lg btn-primary">
      <i className="fas fa-glasses"></i> Ver Actores
    </Link>
     <span style={{ width: '10px' }}></span> {/* Espacio adicional */}
    <Link to="/directores" className="btn btn-lg btn-primary mr-2">
      <i className="fa fa-search"></i> Ver Directores
    </Link>
    <span style={{ width: '10px' }}></span> {/* Espacio adicional */}
   <div className="rounded-img"></div> {/* Div para la imagen */}
  </div>
</div>


      


    );}
  export { Inicio };
  
