const todos = ( state = [], action) => {
  //state is an empty array because our todo is an array (think about what the data type is)
  //this reducer is going to return an array of todos [...todos]
  switch(action.type) {
    case 'TODOS':
    //if a todo is created, return the todos
      return action.todos;
    case 'ADD_TODO':
      return [action.todo, ...state]
      //take object, place it in front then return all the remaining todos in state
    case 'TOGGLE_TODO':
      return state.map( todo => {
        if (todo.id === action.id )
        return { ...todo, complete: !todo.complete};
        return todo;
      })
      default:
        return state;
  }
};

export default todos;