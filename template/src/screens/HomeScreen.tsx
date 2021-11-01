import React, { FunctionComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from "expo-constants";

const HomeScreen : FunctionComponent = () => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
		backgroundColor: "#ecf0f1",
		padding: 8,
        justifyContent: "center",
        alignItems: "center"
	},
})
