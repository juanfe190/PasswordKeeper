import {StyleSheet} from 'react-native';

export const common = 
StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  txtinput: {
  	width: 300
  },

  button: {
    backgroundColor: '#e57373',
    padding: 5,
    width: 150,
    margin: 5,
    borderRadius: 2,
    height: 40,
    justifyContent: 'center'
  }

});