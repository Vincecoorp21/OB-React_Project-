/**
 * Ejemplo de componente de tipo clase que dispone los métodos de Ciclo de Vida
 */

import React, { Component } from 'react';

class LifeCycleExample extends Component {
  constructor(props) {
    super(props);
    console.log('CONSTRUCTOR cuando se instancia el componente');
  }
  componentWillMount() {
    console.log('WILLMOUNT: Antes del montaje del componente');
  }
  componentDidMount() {
    console.log(
      'DIDMOUNT: Justo al acabar el montaje del componente antes de pintarlo'
    );
  }
  componentWillReceiveProps(nextProps) {
    console.log('WillReceiveProps: Si va a recibir nuevas props');
  }
  shouldComponentUpdate(nextProps, nextState) {
    /**
     * Controla si el componente debe o no actualizarse.
     */
    //return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('WillUpdate: Justo antes de actualizarse');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('DidUpdate: Justo después de actualizarse');
  }
  componentWillUnmount() {
    console.log('WillUnmount: Justo antes de desaparecer');
  }
}

export default LifeCycleExample;
