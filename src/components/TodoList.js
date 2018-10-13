import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from "react-native";

class TodoList extends Component{
  constructor(props){
    super(props);
  }
  render(){
      const{todos,toggleTodo,promise}=this.props;
    if(promise!=='empty')
    {
      return(
        <View style={{top:200}}>
          {promise.map(tweets=>
              <TouchableOpacity key={tweets.id} onPress={()=>alert('hello')}>
                <Text>{tweets.id}</Text>
                <Text>Hello</Text>
              </TouchableOpacity>
          )}
        </View>
      )
    }
    return(
        <View style={{padding:20}}>
          {todos.map(todo=>
              <TouchableOpacity key={todo.id} onPress={()=>toggleTodo(todo.id)}>
                <Text style={{fontSize:24,
                  textDecorationLine:todo.completed?'line-through':'none',
                }}>{todo.text}</Text>
              </TouchableOpacity>
          )}
        </View>
    )}
}

export default TodoList;
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})
