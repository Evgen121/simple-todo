import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Loading from './component/Loading';
import { useEffect } from 'react';
import axios from 'axios';
import TodoList from './component/TodoList';

function App() {
  const [todos, setTodods]= useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((result)=>{setTodods(result.data)})
  },[])

  return (
    
   <div>
     {todos? <div> <TodoList todos={todos}/></div> :<Loading />}
   </div>
  );
}

export default App;
