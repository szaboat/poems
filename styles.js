import { StyleSheet, Platform } from 'react-native';

export const containerStyle = StyleSheet.create({
  container: {
    padding: 15,
    ...Platform.select({
        ios: {
            paddingTop: 50,
        },
        android: {
            paddingTop: 30,
        } 
    })  
  }
});