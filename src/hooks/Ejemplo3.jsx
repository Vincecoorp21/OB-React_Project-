/**
 * Ejemplo Hooks:
 * - useState();
 * - useContext();
 */

import React, { useState, useContext } from 'react';

//Componente1 dispone de un Contexto que va a tener un valor que recibe desde el padre.

const miContexto = React.createContext(null);

const Componente1 = () => {
  //Inicialiamos un estado vacío que va a rellenarse con los datos que recibe desde el padre.
  const state = useContext(miContexto);

  return (
    <div>
      <h1>El token es: {state.token}</h1>
      {/*Pintamos el componente2*/}
      <Componente2 />
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);

  return (
    <div>
      <h2>La sesión id es: {state.sesion}</h2>
    </div>
  );
};

export default function MiComponenteConContexto() {
  const estadoInicial = {
    token: '12345',
    sesion: 1,
  };

  //Creamos el estado de este componente.

  const [sessionData, setsessionData] = useState(estadoInicial);

  //Funcion para añadir nuevos valores

  function actualizarSesion() {
    setsessionData({
      token: 'JWT123456789',
      sesion: sessionData.sesion + 1,
    });
  }

  return (
    <miContexto.Provider value={sessionData}>
      {/*Todo lo que está aquí dentro puede leer los datos de sessionData.
      Además si se actualia, los componentes tambi´n lo actualizan
      */}
      <h1>****Ejemplo useState() y useContext()****</h1>
      <Componente1 />
      <button onClick={actualizarSesion}>Actualizar Session</button>
    </miContexto.Provider>
  );
}
