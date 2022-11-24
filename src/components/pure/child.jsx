import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const Child = ({ name, send, update }) => {
  const messageRef = useRef('');

  const nameRef = useRef('');

  function pressButton() {
    const text = messageRef.current.value;

    alert(`Text Input: ${text}`);
  }

  function pressButtonParams(text) {
    alert(`Text: ${text}`);
  }

  function submitName(e) {
    e.preventDefault();
    update(nameRef.current.value);
  }

  return (
    <div style={{ background: 'lightgrey', padding: '30px' }}>
      <p onMouseOver={() => console.log('On Mouse OVER')}>
        Hello {name}! (Child Component)
      </p>
      <button onClick={() => console.log('Pressed Button 1')}>Button 1</button>
      <button onClick={pressButton}>Button 2</button>
      {/**Ponemos funcón flecha porque queremos que se produzca el evento cuando apretamos el botón. No cuando se actualice la página */}
      <button onClick={() => pressButtonParams('Hello')}>Button 3</button>
      <input
        placeholder='Send a text to your father'
        onFocus={() => console.log('Input focus')}
        onChange={e => console.log('Input change', e.target.value)}
        onCopy={() => console.log('Copied text form input')}
        ref={messageRef}
      ></input>
      <button onClick={() => send(messageRef.current.value)}>
        Send Message
      </button>
      <div style={{ marginTop: '20px' }}>
        <form onSubmit={submitName}>
          <input placeholder='New Name' ref={nameRef} />
          <button type='submit'>Update Me</button>
        </form>
      </div>
    </div>
  );
};

Child.propTypes = {};

export default Child;
