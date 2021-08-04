import { Component } from 'react';
import TodoList from './components/todos/TodoList';
import TodoForm from './components/todos/TodoForm';
import FilterBar from './components/shared/FilterBar';

class App extends Component {
  state = { todos: [
    { id: 1, title: "Learn Rails", complete: true},
    { id: 2, title: "Learn React", complete: false},
    { id: 3, title: "Learn Router", complete: false},
  ], filter: 'All' }

  setFilter = (filter) => {
    // this.setState({ filter: filter })
    // These are the same ^ and v es6 lets us just say filter since they are named the same but mean different values
    this.setState({ filter })
  }

  // helper function to generate IDs
  getUniqId = () => {
    // this just generates a random number, when I add a back end this will be done by the back end automatically
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addTodo = (incomingTodo) => {
    const { todos } = this.state
    const newTodo = { id: this.getUniqId(), ...incomingTodo }
    this.setState({ todos: [...todos, newTodo]})
  }

  completeUpdate = (id) => {
    const { todos } = this.state
    this.setState({
      todos: todos.map( t => {
        if(t.id === id) {
          return {
            ...t,
            complete: !t.complete
          }
        }
        return t
      })
    })
  }

  visibleItems = () => {
    const { todos, filter } = this.state
    switch(filter) {
      case 'Active':
        return todos.filter( t => !t.complete)
      case 'Completed':
        return todos.filter(t => t.complete)
      default:
        return todos
    }
  }

  render() {
    const { todos, filter } = this.state
    return(
      <>
        <h1>The Todo list</h1>
        <TodoForm addTodo={this.addTodo} />
        <FilterBar filter={filter} setFilter={this.setFilter} />
        {
          todos.length > 0 ? 
          <TodoList todos={this.visibleItems()} name="things to learn" completeUpdate={this.completeUpdate} />
          :
          <p>
            Currently nothing added to the list!
          </p>
        }
        
      </>
    )
  }
}

export default App;
