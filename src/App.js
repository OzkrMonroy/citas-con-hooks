import React, { useState, Fragment } from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {
  const [citas, guardarCita] = useState([])

  const crearCita = cliente => {
    const nuevaCita = [...citas, cliente]
    guardarCita(nuevaCita)
    console.log(nuevaCita);
  }

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            {citas.map((cita, index) => (
              <Cita
                key={index}
                index={index}
                cita={cita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
