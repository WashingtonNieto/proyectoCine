import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {

  const [editar, setEditar] = useState(0);


  useEffect(() => {

    console.log("Componentes del listado de peliculas cargado!!");

    conseguirPeliculas();

  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    
    setListadoState(peliculas);

    return peliculas;

  }

  const borrarPeli = (id) => {
    // alert(id);

    // 1) Conseguir las peliculas almacenadas
    let pelis_almacenadas = conseguirPeliculas();
    
    // 2) filtrar esas peliculas para que elimine del array
    let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));
    console.log(pelis_almacenadas, nuevo_array_pelis);

    // 3) Actualizar los datos en  el localstore
    setListadoState(nuevo_array_pelis);

    // 4) actualizar los datos en el localstore
    localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis));
  }
 
  return (
    <>
      {listadoState != null ?
        listadoState.map(peli => {

          return(
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>

              <button className="edit" onClick={() => {setEditar(peli.id)}} >Editar</button>

              <button className="delete" onClick={() => borrarPeli(peli.id)} >Borrar</button>

              {/* aparece formulario para editar */}
              {editar == peli.id && (
                
                <Editar peli={peli}/>

              )}

            </article>
          );
        })
        : <h2>No hay peliculas para mostrar</h2>
      }
    </>
  )
}
