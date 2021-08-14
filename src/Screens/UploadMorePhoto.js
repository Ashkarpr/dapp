import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';


const UploadMorePhoto = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.Heading}>Upload more photo</Text>
        <Text style={styles.subText}>
          More photos means more likely to get a{'\n'}
          match. You can change these later.
        </Text>

        <View style={{backgroundColor: 'white', marginTop: '10%'}}>
          <View style={styles.photAddingmainView}>
            <View
              style={{
                width: '28%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 110,
                backgroundColor: 'lightgray',
                borderRadius: 10,
                opacity: 0.9,
                flexWrap: 'wrap',
              }}>
              <Image
                source={require('./src/Assets/ImagesofUploadMorePhotos/FirstImage.jpg')}
                resizeMode="contain"
                style={{borderRadius: 5}}
              />
            </View>
            <View
              style={{
                width: '28%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 110,
                backgroundColor: 'lightgray',
                borderRadius: 10,
              }}>
              <Feather name="plus" size={30} color="white" />
            </View>
            <View
              style={{
                width: '28%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 110,
                backgroundColor: 'lightgray',
                borderRadius: 10,
              }}>
              <Feather name="plus" size={30} color="white" />
            </View>
          </View>
          <View style={styles.SecondRowphotAddingmainView}>
            <View
              style={{
                width: '28%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 110,
                backgroundColor: 'lightgray',
                borderRadius: 10,
              }}>
              <Feather name="plus" size={30} color="white" />
            </View>
            <View
              style={{
                width: '28%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 110,
                backgroundColor: 'lightgray',
                borderRadius: 10,
              }}>
              <Feather name="plus" size={30} color="white" />
            </View>
            <View
              style={{
                width: '28%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 110,
                backgroundColor: 'lightgray',
                borderRadius: 10,
              }}>
              <Feather name="plus" size={30} color="white" />
            </View>
          </View>
        </View>

      </View>
      <View style={styles.bottomMainContainer}>
        <TouchableOpacity style={styles.ArrowNext}>
          <Entypo name="chevron-small-right" size={40} color="#ff6f6b" />
        </TouchableOpacity>
        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.FirstRowStylesofBottom}>
            <Entypo name="camera" size={30} color="white" />
            <Text style={styles.confusedTextStyle}>Confused?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondRowStylesofBottom}>
            <Text style={styles.lastTextStyleofBottom}>
              View photo guidelines
            </Text>
          </TouchableOpacity>
        </View>
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
  },
  innerContainer: {
    width: '100%',
    marginTop: '15%',
    paddingBottom: '5%',
    paddingHorizontal: '5%',
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
  photAddingmainView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  SecondRowphotAddingmainView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '5%',
  },
  bottomMainContainer: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: '0%',
  },
  ArrowNext: {
    alignSelf: 'flex-end',
    width: '17%',
    height: '30%',
    borderTopColor: '#f5426f',
    borderRightColor: '#f5426f',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginBottom: '5%',
    marginRight: '3%',
  },
  bottomView: {
    alignSelf: 'center',
    backgroundColor: '#f5426f',
    width: '100%',
    height: 150,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: '5%',
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
  FirstRowStylesofBottom: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: '10%',
    alignItems: 'center',
    width: '100%',
  },
  confusedTextStyle: {
    color: 'white',
    fontSize: 15,
    marginLeft: '5%',
  },
  secondRowStylesofBottom: {
    alignSelf: 'center',
    marginTop: '2%',
    paddingHorizontal: '10%',
    justifyContent: 'center',
    width: '100%',
  },
  lastTextStyleofBottom: {
    color: 'white',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
});

export default UploadMorePhoto;
