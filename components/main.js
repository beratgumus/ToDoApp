import React from 'react';
import {ToDoAppList} from './ToDoAppList'
import {AddNewTask} from './AddNewTask'

export class Todo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      tasks: props.tasks
    };
    this.updateList = this.updateList.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  updateList(text) {
    var updatedTasks = this.state.tasks;
    updatedTasks.push(text);
    this.setState({tasks: updatedTasks});
    this.updateLocaleStorage(updatedTasks);
  }
  removeTask(text) {
    var updatedTasks = this.state.tasks;
    updatedTasks.splice(updatedTasks.indexOf(text), 1);
    this.setState({tasks: updatedTasks});
    this.updateLocaleStorage(updatedTasks);
  }
  updateLocaleStorage(updatedTasks) {
    localStorage.setItem('storedTasks', JSON.stringify(updatedTasks));
  }

  render() {
    return (
      <div>
        <h1>ToDo App</h1>
        <AddNewTask updateList={this.updateList}/>
        <ToDoAppList tasks={this.state.tasks} remove={this.removeTask}/>
      </div>

    );
  }
}