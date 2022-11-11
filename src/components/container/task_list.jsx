import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {
  const defaultTask1 = new Task(
    'Example1',
    'Default description 1',
    true,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    'Example2',
    'Default description 2',
    false,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    'Example2',
    'Default description 2',
    false,
    LEVELS.BLOCKING
  );

  //Estado del componente...

  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);
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
      <div className='col-12'>
        <div className='card'>
          {/* CArd header (title)*/}
          <div className='card-header p-3'>
            <h5>Your Tasks:</h5>
          </div>
          {/**Card Body (content) */}
          <div
            className='card-body'
            data-mdb-perfect-scrollbar='true'
            style={{ position: 'relative', height: '400px' }}
          >
            <table>
              <thead>
                <tr>
                  <th scope='col'>Title</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Priority</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/**TODO: Iterar una lista de tareas */}
                {tasks.map((task, index) => {
                  return (
                    <TaskComponent key={index} task={task}></TaskComponent>
                  );
                })}
              </tbody>
            </table>
          </div>
          <TaskForm />
        </div>
      </div>
      {/* TODO: Aplicar un For/Map para renderizar un a lista */}
    </div>
  );
};

export default TaskListComponent;
