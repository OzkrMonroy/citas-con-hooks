import React, { useState, Fragment, useEffect } from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'))

    if(!citasIniciales) {
      citasIniciales = []
    }

  const [citas, guardarCita] = useState(citasIniciales)

  const crearCita = cliente => {
    const nuevaCita = [...citas, cliente]
    guardarCita(nuevaCita)
  }

  const eliminarCita = index => {
    const nuevasCitas = [...citas]
    nuevasCitas.splice(index, 1)
    guardarCita(nuevasCitas)
  }

  const titulo = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra tus citas aquí'

  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'))

    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    }else {
      localStorage.setItem('citas', JSON.stringify([]))
    }

  }, [citas])

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
            <h2>{titulo}</h2>
            {citas.map((cita, index) => (
              <Cita
                key={index}
                index={index}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
