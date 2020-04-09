import React, { Component } from 'react';
import './App.css';
import Header from './Components/layout/Header'
import Todos from './Components/Todos';
import Addtodo from './Components/Addtodo';
// import uuid from 'uuid/v4';

class App extends Component  {
  state = {
    todos: [
      {
        id: 1,
        title: 'take out trash',
        completed: false
      },
      {
        id:2,
        title: 'take out girlfriend',
        completed: false
      },
      {
        id:3,
        title: 'meeting with boss',
        completed: false
      }
    ]
  }
// toggles compete 
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }
  // delet todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id!== id)]});
  }
  // add todo
  addTodo = () => {
    console.log('title')
    const newTodo = {
      id: 4,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });

  }

  render() {
 
  return (
    <div className="App">
      <div className="container"></div>
      <Header />
      <Addtodo addTodo={this.addTodo} />
      <Todos todos={this.state.todos} markComplete={this.markComplete} 
      delTodo={this.delTodo}/>
    </div>
  );
}
}



export default App;
