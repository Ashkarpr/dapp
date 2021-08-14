import React from 'react';
import {View, Text, TextInput, StyleSheet,TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const EnterYourEmailId = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.Heading}>
          Enter your{'\n'}
          Email Address
        </Text>
        <Text style={styles.subText}>This can't be changed later.</Text>
        <TextInput
          placeholder="Enter your email Id"
          style={styles.enterNameStyle}
        />
      </View>
      <View style={styles.bottomView} >
        <TouchableOpacity style={styles.BottomFirstComponent}>
          <Text style={styles.BottomFirstTextStyle}>
            Skip
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.BottomSecondComponent}>
          <Entypo name="chevron-small-right" size={40} color="#ff6f6b" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white',
    
    padding: '7%',
  },
  innerContainer: {
    width: '100%',
    marginTop: '15%',
    paddingBottom: '5%',
  },
  Heading: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
  },
  subText: {
    color: 'black',
    marginTop: '5%',
  },
  enterNameStyle: {
    borderWidth: 0.5,
    borderColor: 'gray',
    width: '100%',
    alignSelf: 'flex-start',
    borderRadius: 5,
    height: 40,
    marginTop: '5%',
  },
  bottomView:
  {
    alignSelf:"center",
    position:"absolute",
    bottom:"5%",
    backgroundColor:"white",
    width:"100%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  BottomFirstComponent:{
    justifyContent:"center",alignItems:"center"
  },
  BottomFirstTextStyle:{
    color:"black",fontSize:15
  },
  BottomSecondComponent:{
     borderWidth: 3,
    borderColor:"#ff6f6b",
    borderRadius:100,
    width: '18%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
});

export default EnterYourEmailId;
