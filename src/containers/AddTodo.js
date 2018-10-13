import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class AddTodo extends Component {

    state={
      text:'',
    }

    addTodo=(text)=>{
        this.props.dispatch(addTodo(text));
        this.setState({text:''});
    }


    render() {
        return (
            <View style={{flexDirection:'row',marginHorizontal:20}}>
                <TextInput
                  value={this.state.text}
                  onChangeText={text=>this.setState({text})}
                  placeholder='Add a new Todo'
                  style={{borderWidth:1,borderColor:'#f2f2e1',backgroundColor:'#eaeaea',height:50,
                          flex:1,padding:5}}
                />
                <TouchableOpacity onPress={()=>this.addTodo(this.state.text )}>
                  <View style={{height:50,backgroundColor:'#eaeaea'}}>
                      <FontAwesome name={'plus'} size={30} style={{color:'red',padding:10}}/>
                  </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect()(AddTodo);
