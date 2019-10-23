import React, { Fragment, useState } from 'react';

function Formulario({crearCita}) {
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  })

  const actualizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name] : e.target.value
    })
  }

  const guardarCita = e => {
    e.preventDefault()
    crearCita(cita)
  }

  return(
    <Fragment>
      <h2>Crear Cita</h2>
      <form
        onSubmit={guardarCita}
      >
        <label>Nombre Mascota</label>
        <input 
          type="text" 
          name="mascota"
          className="u-full-width" 
          placeholder="Nombre Mascota"
          onChange={actualizarState}
        />

        <label>Nombre Dueño</label>
        <input 
          type="text" 
          name="propietario"
          className="u-full-width"  
          placeholder="Nombre Dueño de la Mascota"
          onChange={actualizarState}
        />

        <label>Fecha</label>
        <input 
          type="date" 
          className="u-full-width"
          name="fecha"
          onChange={actualizarState}
        />               

        <label>Hora</label>
        <input 
          type="time" 
          className="u-full-width"
          name="hora" 
          onChange={actualizarState}
        />

        <label>Sintomas</label>
        <textarea 
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
        ></textarea>

        <button type="submit" className="button-primary u-full-width">Agregar</button>
      </form>
    </Fragment>
  )
}

export default Formulario