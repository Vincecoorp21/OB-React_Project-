import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
  const defaultTask = new Task(
    'Example',
    'Default description',
    false,
    LEVELS.NORMAL
  );

  //Estado del componente...

  const [tasks, setTasks] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);

  //Control del ciclo de vida del componente...

  useEffect(() => {
    console.log('Task state has been modified');
    setLoading(false);
    //No está ya cargando la tarea
    return () => {
      console.log('TaskList Component is going to unmount...');
    };
  }, [tasks]);
  //queremos que algo se ejecute cada vez que haya una modificación de las tareas.

  const changeCompleted = id => {
    console.log('TODO: Cambiar estado de una tarea');
  };

  return (
    <div>
      <div>
        <h1>Your Tasks:</h1>
      </div>
      {/* TODO: Aplicar un For/Map para renderizar un a lista */}
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

export default TaskListComponent;
