import React, { useState, Fragment } from 'react';
import Formulario from './components/Formulario'

function App() {
  const [citas, guardarCita] = useState([])

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario/>
          </div>
          <div className="one-half column"></div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
