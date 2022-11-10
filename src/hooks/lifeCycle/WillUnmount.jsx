/**
 * Ejemplo para controlar cuando el componente va a desaparecer.
 */

import React, { useSate } from 'react';

export class WillUnmount extends Component {
  componentWillUnmount() {
    console.log('Comportamiento antes de que el componente desaparezca');
  }
  render() {
    return (
      <div>
        <h1>WillUnmount</h1>
      </div>
    );
  }
}

export const WillUnmountHook = () => {
  useEffect(() => {
    //aqui no ponemos nada
    return () => {
      console.log('Comportamiento antes de que el componente desaparezca');
    };

    /**El return es aquello que se va a ejecutar cuando haya terminado el componente */
  }, []);
  //queremos que solo se ejecute una vez
  return (
    <div>
      <h1>WillUnmount</h1>
    </div>
  );
};
