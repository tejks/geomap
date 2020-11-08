// Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

import React, { useState } from 'react'
import { StyleSheet, View, Image, Text, Switch } from 'react-native'

import mapIcon from '../assets/img/map.png'

const ListItem = props => {
    const {timestamp, latitude, longitude, isEnabled, id} = props.data

    return(
        <View style={styles.container}>
            <View>
                <Image style={{width: 50, height: 50}} source={mapIcon}/>
            </View>
            <View>
                <Text style={styles.bigText}>timestamp: {timestamp}</Text>
                <Text style={styles.smallText}>latitude: {latitude}</Text>
                <Text style={styles.smallText}>longitude: {longitude}</Text>
            </View>
            <View>
            <Switch
                trackColor={{ false: "#979dac", true: "#979dac" }}
                thumbColor={isEnabled ? "#F72585" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => props.toggleSwitch(id)}
                value={isEnabled}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 15,
    },
    icon: {
        width: 50,
        height: 50
    },
    bigText: {
        fontSize: 15,
        color: '#4361EE',
    },
    smallText: {
        fontSize: 12,
        color: '#979dac'
    }
  });

export default ListItem