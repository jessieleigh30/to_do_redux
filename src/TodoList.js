import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';



const TodoList = ({ todos }) => {
  return (
    <ul>
    { todos.map( t => 
      <Todo key={t.id} {...t} />
      
     )
    }
  </ul>
  )
}

//want to grab the array of todo items, so we create a new function to do that
const mapStateToProps = (state) => {
  return { todos: state.todos};
}


//this gives you access to dispatch
//pass mapStateToProps to give you access to the redux store
export default connect(mapStateToProps)(TodoList);