import Todo from './Todo';

const TodoList = ({ todos, name, completeUpdate }) => {
  return(
    <>
      <h2>{name}</h2>
      <ul>
        {
          todos.map( todo => 
            <Todo {...todo} completeUpdate={completeUpdate} />
          )
        }
      </ul>
    </>
  )
}

export default TodoList;