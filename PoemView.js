import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class PoemView extends Component {

    render() {
        const { text, body } = this.props.poem
        return (
            <View style={styles.container}>
                <View style={styles.poem}>
                    <Text style={styles.title}>{ text }</Text>
                    <Text style={styles.body}> 
                        { body.join("\n") }
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'stretch',
     },
    poem: {
        flexGrow: 1,
        justifyContent:'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        paddingTop: 10,
        paddingBottom: 10,
    },
    body: {
        lineHeight: 20 
    }
})