/*Ejemplo de uso de:
UseState
useRef -->referenciar elementos dentro de la vista
useEffect -->cambios en la vista */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {
  //Crear 2 contadores distintos
  // cada uno en un estado diferente
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  //Vamos a crear una referencia con useRef para asociar una variable con un elemento del DOM
  const miref = useRef();

  function incrementarContador1() {
    setContador1(contador1 + 1);
  }
  function incrementarContador2() {
    setContador2(contador2 + 1);
  }

  //UseEffect

  //CASO 1: Ejecutar siempre un snippet de código.
  //Cada vez que haya un cambio en el estado del comp, se ejecuta a quello que esté dentro del useEffect.

  // useEffect(() => {
  //   console.log('Cambio en el estado del componente');
  //   console.log('Mostrando referencia a elemento del DOM');
  //   console.log(miref);
  // });

  //CASO 2: Ejecutar sólo cuando cambia el Contador 1.
  // Cada vez que haya un cambio en contador 1 se ejecuta lo que diga el useEffect. En caso de que cambie el contador 2, no habrá ejecución.

  // useEffect(() => {
  //   console.log('Cambio en el estado del Contador 1');
  //   console.log('Mostrando referencia a elemento del DOM');
  //   console.log(miref);
  // }, [contador1]);

  //CASO 3: Ejecutar sólo cuando cambia el Contador 1 o Contador2.
  // Cada vez que haya un cambio en contador 1 se ejecuta lo que diga el useEffect. Cada vez que haya un cambio en contador 2 se ejecuta lo que diga el useEffect también.

  useEffect(() => {
    console.log('Cambio en el estado del Contador 1 o Cont2');
    console.log('Mostrando referencia a elemento del DOM');
    console.log(miref);
  }, [contador1, contador2]);

  return (
    <div>
      <h1>Ejemplo useState(), useRef() y useEffect()</h1>
      <h2>CONTADOR 1: {contador1}</h2>
      <h2>CONTADOR 1: {contador2}</h2>
      {/*Elemento referenciado*/}
      <h4 ref={miref}>Ejemplo de elemento referenciado</h4>
      <div>
        {/*Botones para cambiar los contadores */}
        <button onClick={incrementarContador1}>Incrementar1</button>
        <button onClick={incrementarContador2}>Incrementar2</button>
      </div>
    </div>
  );
};

export default Ejemplo2;
