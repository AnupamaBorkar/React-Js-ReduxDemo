import {React} from 'react';
import './App.css';
import AddTodo from './Components/AddTodo/AddTodo';
import List from './Components/List/List';

function App() {
  return (
    <div className="App">
     <AddTodo/>
     <List/>
    </div>
  );
}

export default App;
