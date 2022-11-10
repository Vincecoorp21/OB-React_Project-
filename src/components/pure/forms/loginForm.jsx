/**
 * Componente que va a contenter un formulario para autenticación de usuarios
 */

import React from 'react';

const LoginForm = () => {
  const initialCredentials = [
    {
      user: '',
      password: '',
    },
  ];

  const [credentials, setcredentials] = useState(initialCredentials);
  //Para actualiar las credenciales del usuario...

  return <div></div>;
};

export default LoginForm;
