import React, { useEffect } from 'react';
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Permissions from 'expo-permissions';

import MyButton from './MyButton';

import triangles from '../assets/img/Group_1.png';
import logo from '../assets/img/terrain-24px.png';

const Main = (props) => {
  const setPermissions = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      alert('Odmawiam przydzielenia uprawnień do czytania lokalizacji');
    } else {
      props.navigation.navigate('List');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <LinearGradient colors={['#4361EE', '#F72585']} style={styles.linearGradient}>
        <ImageBackground source={triangles} style={styles.image}>
          <View style={styles.logoContainer}>
            <View style={styles.logoName}>
              <Image source={logo} style={{ width: 90, marginLeft: 30 }} />
              <Text style={styles.logoText}>Geomap</Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Save</Text>
            <Text style={styles.text}>The</Text>
            <Text style={styles.text}>World</Text>
          </View>
          <View style={styles.buttonContainer}>
            <MyButton
              textStyle={styles.buttonTextStyle}
              callback={setPermissions}
              boxStyle={styles.buttonBoxStyle}
            >
              Start the adventure
            </MyButton>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  buttonBoxStyle: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonTextStyle: {
    color: '#4361EE',
    fontSize: 15,
  },
  image: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 4,
    // backgroundColor: 'blue'
  },
  logoContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor: 'red'
  },
  logoName: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  logoText: {
    color: 'white',
    fontSize: 40,
  },
  text: {
    color: 'white',
    fontSize: 45,
    marginLeft: 20,
  },
});

export default Main;
