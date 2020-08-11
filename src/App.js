import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';


class App extends Component{

  state = {
    todos :
    [
      { id : 1, content : 'get up early in the morning'},
      { id : 2, content : 'learn react from netNinjas'},
      
    ]
  }

  deleteTodo = (Local_id) =>{
   //console.log(Local_id);
   const todos = this.state.todos.filter(todo => {
     return todo.id !== Local_id;
   })
   this.setState({
     todos 
   })
  }


addTodo = (todo) =>{
todo.id = Math.random();

let todos = [...this.state.todos, todo]
this.setState({
  todos
})
}


  render(){
    return (
      <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
       <Todos todos={ this.state.todos } deleteTodo={this.deleteTodo}/>
       <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
