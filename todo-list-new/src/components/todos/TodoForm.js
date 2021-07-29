import { Component } from 'react';

class TodoForm extends Component {
  state = { title: "", complete: false }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state)
    this.setState({ title: "", complete: false })
  }

  render() {
    const { title } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          name='title'
          value={title}
          onChange={this.handleChange}
        />
        <button type="submit">Add</button>
      </form>
    )
  }
}

export default TodoForm;