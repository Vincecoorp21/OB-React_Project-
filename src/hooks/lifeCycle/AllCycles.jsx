import React, { useEffect } from 'react';

export default function AllCycles() {
  useEffect(() => {
    console.log('Componente creado');
    //esto se ejecutará continuamente
    const intervalID = setInterval(() => {
      document.title = `${new Date()}`;
      console.log('actualización del componente');
    }, 1000);

    return () => {
      //Esto se ejecuta justo cuando el componente va a desaparecer....
      console.log('Componente va a desaparecer');
      document.title = 'Tiempo detenido';
      clearInterval(intervalID);
    };
  }, []);
  //Cuando se actualiza el componente se vuelve a pintar

  return <div>AllCycles</div>;
}
