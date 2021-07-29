import { Component } from 'react';
import TodoList from './components/todos/TodoList';
import TodoForm from './components/todos/TodoForm';

class App extends Component {
  state = { todos: [
    { id: 1, title: "Learn Rails", complete: true},
    { id: 2, title: "Learn React", complete: false},
    { id: 3, title: "Learn Router", complete: false},
  ]}

  // helper function to generate IDs
  getUniqId = () => {
    // this just generates a random number, when I add a back end this will be done by the back end automatically
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addTodo = (incomingTodo) => {
    const { todos } = this.state
    const newTodo = { id: this.getUniqId, ...incomingTodo }
    this.setState({ todos: [...todos, newTodo]})
  }

  render() {
    const { todos } = this.state
    return(
      <>
        <h1>The Todo list</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={todos} name="things to learn" />
      </>
    )
  }
}

export default App;
