import {ADD_TODO,TOGGLE_TODO,PROMISE} from './actionTypes'
import axios from 'axios';

let nextId=0
export const addTodo=(text)=>({
   type:ADD_TODO,
   id:nextId++,
   text
})

export const toggleTodo=(id)=>({
   type:TOGGLE_TODO,
   id
})

export function callPromise(tweets){
  const url='https://staging.chinmayamission.com/wp-json/wp/v2/tweet';
  const req=axios.get(url);
   return{
     type:PROMISE,
     payload:req,
   };
}
