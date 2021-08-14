import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const UploadYourPhoto = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.Heading}>Upload Your photo</Text>
        <Text style={styles.subText}>
          Upload a photo which shows your face{'\n'}
          clearly. This can be changed later on.
        </Text>
        <View style={styles.addBarFirstViewsStyle}>
          <TouchableOpacity style={styles.addBarsInnerStyle}>
            <Text style={styles.addBarsContentStyle}>Upload a photo</Text>
            <Feather name="plus" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.addSecondBarViewsStyle}>
          <TouchableOpacity style={styles.addBarsInnerStyle}>
            <Text style={styles.addBarsContentStyle}>Add from facebook</Text>
            <EvilIcons
              name="sc-facebook"
              size={30}
              color="#f5426f"
              style={styles.fbIconStyle}
            />
          </TouchableOpacity>
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
  addBarFirstViewsStyle: {
    backgroundColor: '#f5426f',
    paddingHorizontal: '5%',
    justifyContent: 'center',
    width: '100%',
    height: 55,
    borderRadius: 10,
    marginTop: '10%',
  },
  addBarsInnerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addBarsContentStyle: {
    color: 'white',
    fontSize: 17,
  },
  fbIconStyle: {
    backgroundColor: 'white',
    padding: '1%',
    borderRadius: 50,
  },

  addSecondBarViewsStyle: {
    backgroundColor: '#f5426f',
    paddingHorizontal: '5%',
    justifyContent: 'center',
    width: '100%',
    height: 55,
    borderRadius: 10,
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

export default UploadYourPhoto;
