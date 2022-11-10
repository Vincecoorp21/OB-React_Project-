/**Ejemplo de uso del ciclo de vida del método en componente clase
 * y el hook de ciclo de vida en componente funcional.
 * LLeva a cabo algún cambio en el componente, y cualquier cambio en el estado tiene que verse
 * repercutido.
 */

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log(
      'Comportamiento cuando el componente recibe nuevos props, o cambio en su estado privado'
    );
  }
  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    );
  }
}

export const DidUpdateHook = () => {
  useEffect(() => {
    console.log(
      'Comportamiento cuando el componente recibe nuevos props, o cambio en su estado privado'
    );
  });
  return (
    <div>
      <h1>DidUpdate</h1>
    </div>
  );
};
