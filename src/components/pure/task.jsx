import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

//importar hoja estilos
import '../../styles/task.scss';

const TaskComponent = ({ task }) => {
  //Ponemos un useEffect para saber cuando una tarea desaparece, cuando la tengamos que borrar o la modifiquemos

  useEffect(() => {
    console.log('Created Task');
    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    };
  }, [task]); //corchetes, que se ejecute una vez. Ausencia de corchetes, que se ejecute todas las veces.

  return (
    <div>
      <h2 className='task-name'>Nombre: {task.name}</h2>
      <h3>Descripción: {task.description}</h3>
      <h4>Level: {task.level}</h4>
      <h5>This task is: {task.completed ? 'COMPLETED' : 'PENDING'}</h5>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
