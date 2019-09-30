import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Title extends Component {
    render( ) {
        const { children } = this.props

        return (
            <View style={styles.header}>
                <Text style={styles.title}>{children}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 10,
    },
    title: {
        textAlign: 'left',
        fontSize: 22,
        fontFamily: 'Latin Modern Roman Bold'
    },
})