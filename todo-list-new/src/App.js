import { Component } from 'react';
import TodoList from './components/todos/TodoList';

class App extends Component {
  state = { todos: [
    { id: 1, title: "Learn Rails", complete: true},
    { id: 2, title: "Learn React", complete: false},
    { id: 3, title: "Learn Router", complete: false},
  ]}

  render() {
    const { todos } = this.state
    return(
      <>
        <h1>The Todo list</h1>
        <TodoList todos={todos} name="things to learn" />
      </>
    )
  }
}

export default App;
