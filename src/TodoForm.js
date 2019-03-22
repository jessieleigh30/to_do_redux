import React from 'react';
import { connect } from 'react-redux';
//connects this form to store

class TodoForm extends React.Component {
  state = { name: " "};

  handleChange = (e) => {
    this.setState({ name: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    const { id, dispatch } = this.props;
    const todo = { name, id, complete: false}
    //this goes to our reducer, hits the add_todo, data type we want to add
    //dispatch goes into each reducers and looks for "ADD_TODO"
    dispatch({ type: "ADD_TODO", todo});
    dispatch({ type: "INC_ID" })
    //clear form
    this.setState({ name: "",})
  }

  render(){
    const { name }= this.state;

    return(

      <div>
        <h3>Add Todo</h3>
        <form onSubmit={this.handleSubmit}>
          <input value={name} onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId };
}

//this is how you connect it to store
//gives us the dispatch prop 
export default connect(mapStateToProps)(TodoForm);
