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
      statusTask: "",
      counter: 0,
      counterMessage: "",
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
        statusTask: `Вы добавили задачу: ${newTask.title}. ${new Date()}`,
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
          statusTask: `Вы добавили задачу: ${newTask.title}. ${new Date()}`,
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
    // let countCompletedTasks = counter;

    const removeTask = tasks.filter(item => item.id === id);
    
    const filteredToDoList = tasks.filter((item) => item.id !== id);
    this.setState({
      statusTask: `Вы удалили задачу: ${removeTask[0].title}. ${new Date()}`,
      tasks: filteredToDoList,
    });
    // if (removeTask[0].isDone === true) {
    //   this.setState({
    //     counter: countCompletedTasks - 1
    //   })
    // }
    
  };

  changeFilter = (value) => {
    this.setState({
      filter: value
    })
  }

  changeStatus = (taskId, isDone) => {
    const { tasks } = this.state;
    // let countCompletedTasks = counter;
    let task = tasks.find(t => t.id === taskId); 
    
    if(task) {
      task.isDone = isDone;
      if (isDone === true) {
        
        this.setState({
          tasks: [...tasks],
          // counter: countCompletedTasks + 1,
          statusTask: `Вы завершили задачу: ${task.title}. ${new Date()}`,
        });

      } else {

        this.setState({
          tasks: [...tasks],
          // counter: countCompletedTasks - 1,
          statusTask: `Вы отменили завершение задачи: ${task.title}. ${new Date()}`,
        });
      }
    } 
  }

  counterCompletedTask = () => {
    const { tasks } = this.state;

    let count = 0;

    tasks.map(task => {
      if (task.isDone === true) {
        count = ++count;
      }
      return count;
    })
    this.setState({
      counter: count,
    });
    this.setState({
      counterMessage: `Количество выполненных задач из списка: ${count}`
    })

    setTimeout(() => this.setState({counterMessage: ""}), 5000);
    
  }

  render() {
    const { inputValue, tasks, filter, error, statusTask, counterMessage } = this.state;
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
          <Button text="add TODO" onClickHandler={this.addTask} />
        </div>
        {error && <div className="error-message">{error}</div>}
        {statusTask && <div>{statusTask}</div>}
        <Button
          text="Показать количество выполненных задач"
          onClickHandler={this.counterCompletedTask}
          customClass="counter_btn"
        ></Button>
        <span>{counterMessage}</span>
        <List
          tasks={tasksForTodolist}
          removeTask={this.removeTask}
          changeStatus={this.changeStatus}
        />
        <Filters changeFilter={this.changeFilter} filter={filter} />
      </div>
    );
  }
}

export default App;
