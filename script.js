import React from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './components/main'

var taskList = ["Task 1 ", "Task 2 "];

var tasks = localStorage.getItem('storedTasks');
if (tasks) {
  taskList = JSON.parse(tasks);
}
ReactDOM.render(
  <Todo tasks={taskList}/>, document.getElementById('todo'));
