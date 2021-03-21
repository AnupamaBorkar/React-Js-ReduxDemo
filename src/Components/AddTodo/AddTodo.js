import React from 'react';
import {connect} from 'react-redux';
import { addToDo } from '../action';

const AddTodo = (props) => {
    return (
       <form onSubmit={(event)=>{
           event.preventDefault();
           let input =event.target.userInput.value;
           props.dispatch(addToDo(input));
           event.target.userInput.value ="";
       } }>

           <input type="text" name="userInput" />
           <button>Submit</button>
       </form>
    )
}
export default connect()(AddTodo)

