import React, { Component } from 'react';
import { connect } from 'react-redux';


class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  //The event's target is the input that was listening for the event (the text field), and the value is the current value of that text field.


  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          placeholder="add todo"
          onChange={(event) => this.handleChange(event)}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (formData) => dispatch({ type: "ADD_TODO", payload: formData }),
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);

