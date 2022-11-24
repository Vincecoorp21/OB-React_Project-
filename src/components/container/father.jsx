import React, { useRef, useState } from 'react';
import Child from '../pure/child';

const Father = () => {
  const [name, setname] = useState('Vicente');

  function showMessage(text) {
    alert(`Message received ${text}`);
  }

  function updateName(newName) {
    setname(newName);
  }

  return (
    <div style={{ background: 'tomato', padding: '20px' }}>
      <Child name={name} send={showMessage} update={updateName} />
    </div>
  );
};

Father.propTypes = {};

export default Father;
