import React from 'react';
import { connect } from 'react-redux';
import { deleteToDo } from '../action';
//import todos from '../../reducer/todos';

 const List = (props) => {
    return (
       <ul>
           {props.todos.map((todo,index)=>(
               <li key={index}> {todo.message} <button onClick={()=>props.dispatch(deleteToDo(todo.id))}>Delete</button></li>
           ))

           }
       </ul>
    );
};
 const mapStateToProps = (state) =>({
     todos: state.todos.data,
 })

export default connect(mapStateToProps)(List);
