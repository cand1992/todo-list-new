const TodoList = ({ todos, name }) => {
  return(
    <>
      <h2>{name}</h2>
      <ul>
        {
          todos.map( todo => 
            <li>
              {todo.title}
            </li>
          )
        }
      </ul>
    </>
  )
}

export default TodoList;