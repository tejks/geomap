import React, { useState } from 'react'
import { StyleSheet, View, Image, Text, Switch } from 'react-native'
import MapView from 'react-native-maps';

import mapStyle from '../assets/json/map-style.json'

const Map = props => {
    console.log(props.route.params.data)
    
    const markers = props.route.params.data.map(el => {
        if(el.isEnabled) 
            return <MapView.Marker
                        key={el.id}
                        coordinate={{
                            latitude: el.latitude,
                            longitude: el.longitude,
                        }}
                        pinColor={'#4361EE'}
                    />
    })

    return(
        <View style={styles.container}>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: props.route.params.data[0].latitude,
                    longitude: props.route.params.data[0].longitude,
                    latitudeDelta: 1,
                    longitudeDelta: 1,
                }}
                customMapStyle={mapStyle}
            >
            {markers}
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    },
  });

export default Map