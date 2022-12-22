import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffffff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input:{
        backgroundColor: '#ffffffff',
        width: '95%',
        height: 55,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        color: '#000000',
        fontSize: 16,
        shadowColor: 'grey',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.4,
        elevation: 8,
        alignSelf: 'center',

      },
      boxInput:{
        width: '90%',
        height: 100,
      },

});