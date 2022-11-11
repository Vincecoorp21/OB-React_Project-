import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

//importar hoja estilos
import '../../styles/task.scss';
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({ task }) => {
  //Ponemos un useEffect para saber cuando una tarea desaparece, cuando la tengamos que borrar o la modifiquemos

  useEffect(() => {
    console.log('Created Task');
    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    };
  }, [task]); //corchetes, que se ejecute una vez. Ausencia de corchetes, que se ejecute todas las veces.

  /**
   * Function that returns a Badge depending on the Level of the task
   */
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-primary'>{task.level}</span>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-warning'>{task.level}</span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-danger'>{task.level}</span>
          </h6>
        );

      default:
        break;
    }
  }

  {
    /**
Funcion que que nos muestra un icono u otro según si la tarea está terminada.
Así en el return de renderización hay menos texto.
 */
  }

  function taskCompletedIcon() {
    if (task.completed) {
      return (
        <i
          className='bi-toggle-on'
          style={{ color: 'green', fontWeight: 'bold' }}
        ></i>
      );
    } else {
      return (
        <i
          className='bi-toggle-off'
          style={{ color: 'grey', fontWeight: 'bold' }}
        ></i>
      );
    }
  }

  return (
    <tr className='fw-normal'>
      <th>
        <span className='ms-2'>{task.name}</span>
      </th>
      <td className='align-middle'>
        <span>{task.description}</span>
      </td>
      <td className='align-middle'>
        {/**Sustituir por un badge */}
        <span>{taskLevelBadge()}</span>
      </td>
      <td className='align-middle'>
        {/**Sustituir por un iconos */}
        {/* {task.completed ? (
          <i
            className='bi-toggle-on'
            style={{ color: 'green', fontWeight: 'bold' }}
          ></i>
        ) : (
          <i
            className='bi-toggle-off'
            style={{ color: 'grey', fontWeight: 'bold' }}
          ></i>
        )} */}
        {taskCompletedIcon()}
        <i className='bi-trash' style={{ color: 'tomato' }}></i>
        {/* <span>{task.completed ? 'COMPLETED' : 'PENDING'}</span> */}
      </td>
    </tr>
    // <div>
    //   <h2 className='task-name'>Nombre: {task.name}</h2>
    //   <h3>Descripción: {task.description}</h3>
    //   <h4>Level: {task.level}</h4>
    //   <h5>This task is: {task.completed ? 'COMPLETED' : 'PENDING'}</h5>
    // </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
