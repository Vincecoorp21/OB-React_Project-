import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name={"Martín"}></Greeting> */}
        {/* Componente de ejemplo funcional */}
        {/* <Greetingf name="Martín"></Greetingf> */}
        {/* Componente de Listado de Tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/*Ejemplo de uso de Hooks */}
        {/* <Ejemplo1 /> */}
        {/* <Ejemplo2 /> */}
        {/*Todo lo que hay aquí es tratado como props.children */}

        {/* <Ejemplo4 nombre='martin'>
          <h3>Contenido de props.children</h3>
        </Ejemplo4> */}
        {/* <MiComponenteConContexto /> */}
        <GreetingStyled name='Vince' />
      </header>
    </div>
  );
}

export default App;
