import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Pepper extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text> GOSWAMI SPICES PEPPER.  RS.180</Text>
            </View>
        )
    }
}