import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import AddTodo from './containers/AddTodo'
import VisibleTodos from './containers/VisibleTodos'
import PromiseButton from './containers/PromiseButton';
export default class CounterApp extends Component {

    render() {
        return (
            <View style={styles.container}>
                <AddTodo/>
                <PromiseButton/>
                <View>
                  <VisibleTodos/>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:40,
    }
});
