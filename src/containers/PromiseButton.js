import React, { Component } from "react";
import {
    Button,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from "react-native";
import {connect} from 'react-redux';
import {callPromise} from '../actions';
import {bindActionCreators} from 'redux';

class PromiseButton extends Component {

    callPromise=()=>{
        this.props.callPromise();
    }


    render() {
        return (
            <View style={{backgroundColor:'white',top:50, justifyContent:'center'}}>
                <TouchableOpacity style={{width:'100%',height:20,alignItems:'center'}} onPress={()=>this.callPromise()}>
                  <View>
                  <Text style={{color:'blue',fontSize:25,fontWeight:'500'}}>Call PROMISE</Text>
                  </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({callPromise},dispatch);
}

export default connect(null,mapDispatchToProps)(PromiseButton);
