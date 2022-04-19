import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HOME extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text> WELCOME TO GOSWAM SPICES ! We sell Spices and Spoons.</Text>
            </View>
        )
    }
}