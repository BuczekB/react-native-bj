import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';



export default function Card({ navigation, cardUrl }) {

    const imageCard = cardUrl
    const test = 'https://deckofcardsapi.com/static/img/0S.png'


    return (

        <Image
            style={styles.card}
            source={{ uri: `${imageCard}` }}
        />

    )
}

const styles = StyleSheet.create({
    card: {
        width: 65,
        height: 90,
        margin: 1,
    }
})


