import {StyleSheet} from 'react-native';
import loginStyles from './login.js';
import Dimensions from 'Dimensions';
const {height} = Dimensions.get('window');

export const colors = {
  primary: "#F44336",
  danger: "red",
  background: "#F5FCFF"
}

export const size = {
  fullHeight: height
}

export const common = 
StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

  clearContainer:{
    flex: 1,
    backgroundColor: '#F5FCFF'
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  txtinput: {
    height: 35
  }

});