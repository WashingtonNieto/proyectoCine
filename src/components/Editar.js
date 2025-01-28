import React, {useState} from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

  const titulo_componente="Editar Película";

  const guardarEdicion = (e, id) => {
    e.preventDefault();
    
    //Consiguir el target del evento
    let target = e.target;

    //Buscar el indice del objeto de la pelicula a buscar
    const pelis_almacenadas = conseguirPeliculas();
    const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

    //Crear objeto con el id del indice encontrado
    let peli_actualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value
    };

    //Actualizar el elementos con ese indice
    pelis_almacenadas[indice] = peli_actualizada;

    //Guardar el nuevo array de objetos y...
    localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

    //Actualizar estados
    setListadoState(pelis_almacenadas);
    setEditar(0);

  }

  return (
    <div className='edit_form'>
      <h3 className='title'> {titulo_componente} </h3>
      <form onSubmit={e => guardarEdicion(e, peli.id)}>
        <input type="text" 
               name="titulo"
               className='titulo_editado'
               defaultValue={peli.titulo}
        />

        <textarea name="descripcion"
                  defaultValue={peli.descripcion}
                  className='descripcion_editada'
        />

        <input type="submit" className='actualizar' value="Actualizar" />

        
      </form>

    </div>
  )
}
