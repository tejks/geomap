import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Switch, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';

import MyButton from './MyButton';
import ListItem from './ListItem';
import { enableExpoCliLogging } from 'expo/build/logs/Logs';

const List = (props) => {
  const [isEnabledAll, setIsEnabledAll] = useState(false);
  const [locationData, setLocationData] = useState([]);

  const toggleSwitchAlla = () => setIsEnabled((previousState) => !previousState);

  const getPosition = async () => {
    let pos = await Location.getCurrentPositionAsync({});
    setLocationData([
      ...locationData,
      {
        id: locationData.length,
        timestamp: pos.timestamp,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        isEnabled: false,
      },
    ]);
  };

  const deleteData = () => {
    setIsEnabledAll(false);
    setLocationData([]);
  };

  const toggleSwitch = (id) => {
    let locationDataCopy = locationData.map((el) =>
      el.id === id ? { ...el, isEnabled: !el.isEnabled } : el
    );
    setLocationData(locationDataCopy);
  };

  const toggleSwitchAll = () => {
    setIsEnabledAll((previousState) => !previousState);
    let locationDataCopy = locationData.map((el) =>
      el.id >= 0 ? (!isEnabledAll ? { ...el, isEnabled: true } : { ...el, isEnabled: false }) : el
    );
    setLocationData(locationDataCopy);
  };

  return (
    <View style={styles.mainContainer}>
      <LinearGradient colors={['#4361EE', '#F72585', '#F72585']} style={styles.linearGradient}>
        <View style={{ flex: 0.5 }}></View>
        <View style={{ flex: 1.5, justifyContent: 'space-around' }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <MyButton
              textStyle={styles.buttonTextStyle}
              callback={getPosition}
              boxStyle={styles.buttonBoxStyle}
            >
              DOWNLOAD AND SAVE POSITION
            </MyButton>
            <MyButton
              textStyle={styles.buttonTextStyle}
              callback={deleteData}
              boxStyle={styles.buttonBoxStyle}
            >
              DELETE ALL DATA
            </MyButton>
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <MyButton
              textStyle={styles.buttonTextStyle}
              callback={() => props.navigation.navigate('Map', { data: locationData })}
              boxStyle={styles.buttonBoxStyle}
            >
              GO TO THE MAP
            </MyButton>
          </View>
        </View>
        <View style={styles.listContainer}>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
              padding: 10,
            }}
          >
            <View>
              <Text style={{ textAlign: 'center' }}>Locations</Text>
            </View>
            <View>
              <Switch
                trackColor={{ false: '#979dac', true: '#979dac' }}
                thumbColor={isEnabledAll ? '#F72585' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchAll}
                value={isEnabledAll}
                style={{ position: 'absolute', marginLeft: 40, marginTop: -3 }}
              />
            </View>
          </View>
          <FlatList
            data={locationData}
            renderItem={({ item }) => <ListItem data={item} toggleSwitch={toggleSwitch} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
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
    fontSize: 10,
  },
  listContainer: {
    flex: 7,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});

export default List;
