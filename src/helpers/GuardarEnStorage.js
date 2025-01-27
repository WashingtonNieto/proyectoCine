export const GuardarEnStorage = (clave, elemento) => {

  //1) comprobar los elementos que hay en el Storage
  let elementos = JSON.parse(localStorage.getItem(clave));

  //2) Comprobar si es un array
  if(Array.isArray(elementos)){
    //si si... añadir dentro del array un elemento nuevo
    elementos.push(elemento);
  }else{
    //Crear un array con la elemento nuevo
    elementos = [elemento];
  }

  //3) Guardar en el LocalStorage
  localStorage.setItem(clave, JSON.stringify(elementos));

  //4) Devolver el objeto encontrado
  return elemento;
}