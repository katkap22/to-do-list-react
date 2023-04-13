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
      onChange: false,
      error: null
    };
  }

  onChangeInput = (event) => {
    this.setState(() => ({
      inputValue: event.target.value
    }));
  };

  addTask = () => {
    const { inputValue, tasks } = this.state;

    if(inputValue.trim() !== '') {
      let newTask = { id: v1(), title: inputValue, isDone: false };
      let newTasks = [newTask, ...tasks];

      this.setState({
        tasks: newTasks,
        inputValue: "",
      });
    } else {
        this.setState({
          error: "Title is required",
        });
    }
  };

  addTaskEnter = (event) => {
    const { inputValue, tasks } = this.state;
    this.setState({
      error: null,
    });
    if (event.charCode === 13) {
      if (inputValue.trim() !== '') {
        let newTask = { id: v1(), title: inputValue, isDone: false };
        let newTasks = [newTask, ...tasks];

        this.setState({
          tasks: newTasks,
          inputValue: "",
        }); 
      } else {
        this.setState({
          error: "Title is required"
        })
      }
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

  changeStatus = (taskId, isDone) => {
    const { tasks } = this.state;
    let task = tasks.find(t => t.id === taskId); 
    if(task) {
      task.isDone = isDone;
    } 
    this.setState({
      tasks: [...tasks]
    });
    }

  render() {
    const { inputValue, tasks, filter, error } = this.state;
    
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
            error={error}
            onChangeInput={this.onChangeInput}
            addTaskEnter={this.addTaskEnter}
          />
          <Button text="add TODO" onClick={this.addTask} />
        </div>
        {error && <div className="error-message">{error}</div>}
        <List
          tasks={tasksForTodolist}
          removeTask={this.removeTask}
          changeStatus={this.changeStatus}
        />
        <Filters changeFilter={this.changeFilter}
                 filter={filter} />
      </div>
    );
  }
}

export default App;
