import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ceil } from 'react-native-reanimated';


export default function Home({ navigation }) {

    const [value, setValue] = useState(0);
    const [money, setMoney] = useState(500)

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.h1Text}>
                    Game
            </Text >
                <Text style={styles.h1Text}>
                    Black Jack
            </Text>
            </View>
            <View style={styles.scoreContainer}>
                <Text style={styles.h1Text}>Bet Value = {value} $</Text>
                <Text style={styles.h1Text}>Money = {money} $</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TextInput
                    onChangeText={(val) => setValue(val)}
                    style={styles.inputContainer}
                    keyboardType='numeric'
                    placeholder='Bet Value' />
                <Button
                    title='Play'
                    onPress={() => navigation.navigate('Game',
                        { betValue: value },
                        { money: money }
                    )} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    headerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    h1Text: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    scoreContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 8,
        width: 200,
        marginBottom: 10,
        textAlign: 'center',
    },
})