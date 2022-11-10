/**Ejemplo de uso del ciclo de vida del método en componente clase
 * y el hook de ciclo de vida en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {
  componentDidMount() {
    console.log(
      'Comportamiento antes de que le componente sea añadido al DOM (renderice)'
    );
  }
  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    );
  }
}

export const DidMountHook = () => {
  useEffect(() => {
    console.log(
      'Comportamiento antes de que le componente sea añadido al DOM (renderice)'
    );
  }, []);
  //si se ejecuta solo una vez ponemos [], sino indicamos nada pondríamos [input], si quitamos los [] se
  //ejecuta TODAS las veces
  return (
    <div>
      <h1>DidMount</h1>
    </div>
  );
};
