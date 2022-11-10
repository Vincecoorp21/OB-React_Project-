// Trabajar con UseState ++++++++++++
// Crear un comp funcional y acceder a su estado privado, a través de un hook y además poder modificarlo.

import React, { useState } from 'react';

function Ejemplo1() {
  //valor inicial para un contador.
  const valorInicial = 0;

  //valor inicial para una persona.
  const personaInicial = {
    nombre: 'Martin',
    email: 'martin@gmail.com',
  };

  // Queremos que el Valor Inicial y Persona Inicial sean parte del estado del componente, para así poder gestionar su cambio y que éste se vea reflejado en la vista del componente.

  // const[nombreVAriable, funcionParaCambiar] = useState(valorInicial)

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  // Método Función para actualizar el estado privado que contiene el contador.

  function incrementarContador() {
    //
    setContador(contador + 5);
  }

  // Función para actualizar el estado de persona en el componente.

  function actualizarPersona() {
    setPersona({
      nombre: 'Pepe',
      email: 'pepe@gmail.com',
    });
  }

  return (
    <div>
      <h1>Ejemplo de UseState</h1>
      <h2>CONTADOR: {contador}</h2>
      <h2>Datos de la persona</h2>
      <h3>nombre: {persona.nombre}</h3>
      <h3>nombre: {persona.email}</h3>
      {/*Bloque botones actualiar estado*/}
      <button onClick={incrementarContador}>INCREMENTAR</button>
      <button onClick={actualizarPersona}>Actualizar</button>
    </div>
  );
}

export default Ejemplo1;
