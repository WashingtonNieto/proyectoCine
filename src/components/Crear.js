import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

  const tituloComponente = "Añadir película";

  const [ peliState, setPeliState ]= useState({
    titulo:'',
    descripcion:''
  })

  const { titulo, descripcion} = peliState;

  const conseguirDatosForm = e => {
    // para que no recargue la pagina del formulario
    e.preventDefault(); 

    // Conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;
    

    // Crear objeto de la pelicula a guardar
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    }

    // Guardar estado
    setPeliState(peli);

    //Actualizar el estado del listado principal
    setListadoState(elementos => {
      return[...elementos, peli];
    })

    //Guardar en el almacenamiento local
    GuardarEnStorage("pelis", peli);


  }



  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>

      <strong>
        {(titulo && descripcion) && "Has creado la pelicula: "+titulo}
      </strong>
      

      <form onSubmit={conseguirDatosForm}>
        <input 
          type="text" 
          id="titulo"
          name="titulo"
          placeholder="Título" />

        <textarea
          id="description" 
          name="descripcion"
          placeholder="Descripcion"></textarea>

        <input 
          type="submit" 
          id="save"
          value="Guardar" />
      </form>

  </div>
  )
}
