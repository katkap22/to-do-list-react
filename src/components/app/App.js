import React from 'react';
import './App.css';
import Title from "../Title";
import Input from '../Input';
import Button from '../Button';
import List from '../List';
import Filters from '../Filters';
import { v1 } from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      tasks: [], //массив объектов (id, title, isDone)
      filter: "all",
    };
  }

  onChangeInput = (event) => {
    this.setState(() => ({
      inputValue: event.target.value
    }));
  };

  addTask = () => {
    const { inputValue, tasks } = this.state;

    let newTask = {id: v1(), title: inputValue, isDone: false};
    let newTasks = [newTask, ...tasks];

    this.setState({
      tasks: newTasks,
      inputValue: "",
    });
  };

  addTaskEnter = (event) => {
    const { inputValue, tasks } = this.state;
    
    if (event.charCode === 13) {
      let newTask = { id: v1(), title: inputValue, isDone: false };
      let newTasks = [newTask, ...tasks];

      this.setState({
        tasks: newTasks,
        inputValue: "",
      });
    }
  }

  removeTask = (id) => {
    const { tasks } = this.state;
    const filteredToDoList = tasks.filter((item) => item.id !== id);
    this.setState({
      tasks: filteredToDoList,
    });
  };

  changeFilter = (value) => {
    this.setState({
      filter: value
    })
  }

  render() {
    const { inputValue, tasks, filter } = this.state;
    
    let tasksForTodolist = tasks;

    if (filter === "completed") {
      tasksForTodolist = tasks.filter((item) => item.isDone === true);
    }
    if (filter === "active") { 
      tasksForTodolist = tasks.filter((item) => item.isDone === false);
    }
    
    return (
      <div className="App">
        <Title name="To Do List" />
        <div className="control">
          <Input
            value={inputValue}
            onChangeInput={this.onChangeInput}
            addTaskEnter={this.addTaskEnter}
          />
          <Button text="add TODO" onClick={this.addTask} />
        </div>
        <List tasks={tasksForTodolist} removeTask={this.removeTask} />
        <Filters changeFilter={this.changeFilter} />
      </div>
    );
  }
}

export default App;
