import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';

const ChooseaMode = () => {
  const [checked, setChecked] = useState('first');

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.Heading}>Choose a mode</Text>
        <Text style={styles.subText}>Everyone's welcome here</Text>
        <View style={{marginTop: '5%'}}>
          <View style={styles.RadioButtonContainer}>
            <View>
              <Text style={styles.buttonTitle}>Date</Text>
              <Text>Find your soulmate</Text>
            </View>
            <View>
              <RadioButton
                color="#ff6f6b"
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
                uncheckedColor={'#ff6f6b'}
              />
            </View>
          </View>

          <View style={styles.RadioButtonContainer}>
            <View>
              <Text style={styles.buttonTitle}>BFF</Text>
              <Text>Make new friends</Text>
            </View>
            <View>
              <RadioButton
                color="#ff6f6b"
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
                uncheckedColor={'#ff6f6b'}
              />
            </View>
          </View>

          <View style={styles.RadioButtonContainer}>
            <View>
              <Text style={styles.buttonTitle}>Bizz</Text>
              <Text>Move your career forward</Text>
            </View>
            <View>
              <RadioButton
                color="#ff6f6b"
                value="third"
                status={checked === 'third' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('third')}
                uncheckedColor={'#ff6f6b'}
              />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.ArrowNext}>
        <Entypo name="chevron-small-right" size={40} color="#ff6f6b" />
      </TouchableOpacity>
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
    marginTop: '10%',
    paddingBottom: '5%',
  },
  Heading: {
    color: 'black',
    fontSize: 27,
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
  RadioButtonContainer: {
    backgroundColor: '#ffe6e6',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    height: 80,
    marginTop: '5%',
    paddingVertical: '3%',
    paddingHorizontal: '5%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: 'black',
    fontSize: 18,
  },
  ArrowNext: {
    position: 'absolute',
    bottom: '5%',
    width: '18%',
    height: '1%',
    right: '5%',
    marginTop: '20%',
    borderBottomColor: '#ff6f6b',
    borderRightColor: '#ed6864',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});

export default ChooseaMode;
