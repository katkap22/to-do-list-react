import React from 'react';
import './App.css';
import Title from "../Title";
import Input from '../Input';
import Button from '../Button';
import ListItem from '../ListItem';

function RenderChild({children}){
  console.log(children)

  if (React.Children.count(children) > 1) {
    return (
      <div>
        {React.Children.toArray(children).map((item) => (
          <p key={children.id}>{item}</p>
        ))}
      </div>
    ); 
    
  } else {
  return React.Children.only(children);
  }
  // return <div>{React.Children.toArray(this.props.children)}</div>;
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: '',
      toDoList: [],
    }
  }

  onChangeInput = (event) => {
    this.setState(() =>({
      inputValue : event.target.value
    }));
  }

  onClickBtn = () => {
    const { inputValue, toDoList } = this.state;

    this.setState({
      toDoList: [inputValue, ...toDoList],
      inputValue: ''
    })
  }

  onRemoveToDo = (todoName) => {
    const {toDoList} = this.state;

    const todoIndex = toDoList.findIndex((item) => item === todoName)

    this.setState({
      toDoList: [...toDoList.slice(0, todoIndex), ...toDoList.slice(todoIndex+1)]
    });
  }

  render() {
    const { inputValue, toDoList } = this.state;

    return (
      <div>
        <Title name="To Do List" />

        <div className="control">
          <Input value={inputValue} onChange={this.onChangeInput} />
          <Button text="add TODO" onClick={this.onClickBtn} />
        </div>

        <div className="list">
          {toDoList.map((item) => {
            return (
              <ListItem key={item} todoName={item} remove={this.onRemoveToDo} />
            );
          })}
        </div>

        <RenderChild>
          <div>Ekaterina</div>
          <div>456</div>
          <div>Kopylova</div>
        </RenderChild>
      </div>
    );
  }
  
}

export default App;
