import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Button, FlatList, TouchableWithoutFeedback } from 'react-native';
//import { FlatList } from 'react-native-gesture-handler';
import Card from '../elements/card';
const axios = require('axios');




export default function Game({ route, navigation }) {

    const { betValue } = route.params;
    const { money } = route.params;
    const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=52';
    const [deck, setDeck] = useState([]);
    const [deckLoaded, setDeckLoaded] = useState(false);


    // dealer cards

    const [deckDealer, setDeckDealer] = useState([]);
    const [variableD, setVariableD] = useState([])


    // shufling cards

    const [counter, setCounter] = useState(0)


    // player cards

    const [deckPlayer, setDeckPlayer] = useState([]);
    const [variableP, setVariableP] = useState([])

    useEffect(() => {

        axios.get(url)
            .then(({ data }) => {

                const deck = data.cards
                setDeck(deck)




            })
            .then(
                setDeckLoaded(true)
            )


            .catch((error) => {
                console.log(error);
            })

    }, [])


    const dealerCards = () => {

        let count = 0
        let points = 0;
        let cardValue = deck[count].value
        let cardimage = deck[count].image;
        let cardCode = deck[count].code;
        const deckCard = []



        while (points <= 15) {

            switch (cardValue) {
                case 'JACK' || 'KING' || 'ACE' || 'QUEEN':
                    cardValue = deck[count].value
                    cardimage = deck[count].image;
                    cardCode = deck[count].code;
                    deckCard.push(cardimage)
                    points += 10
                    count += 1

                    break;


                default:
                    cardValue = deck[count].value
                    cardimage = deck[count].image;
                    cardCode = deck[count].code;
                    deckCard.push(cardimage)
                    const intValue = parseInt(cardValue)
                    points += intValue
                    count += 1

                    break;

            }



        }

        const cardsToPrint = deckCard.map((item) => {
            return (<Card cardUrl={item} />)
        })

        setDeckDealer(cardsToPrint)

    }


    const cards = () => {



        const tescik = deckDealer.map((item) => {
            return (<Card cardUrl={item.cardimage} />)
        })

        console.log(deckDealer);
        setVariableD(tescik)


        test()
    }









    if (deckLoaded) {
        return (
            <View style={styles.container}>
                <View style={styles.score}>
                    <Text style={styles.scoreText}>Points Player:</Text>
                    <Text style={styles.scoreText}>Bet value:{betValue}</Text>
                    <Text style={styles.scoreText}>Money:{money}</Text>
                </View>
                <View style={styles.dealerCards}>
                    {deckDealer}
                </View>
                <View style={styles.playerCards}>
                    {variableP}
                </View>
                <View style={styles.buttons}>
                    <Text style={styles.button} onPress={() => dealerCards()}>1</Text>
                    <Text style={styles.button} onPress={() => cards()}>2</Text>
                    <Text style={styles.button} onPress={() => playerCards()}>3(x)</Text>
                </View>
            </View>
        )
    } else {
        return (
            <View >
                <Text>Loading </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        width: '100%',
        height: '100%',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        backgroundColor: '#666',

    },
    score: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    scoreText: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    dealerCards: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    playerCards: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderColor: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },



})

//<Image source={require(`${deck}`)} />

//<Image style={{ width: 65, height: 90, marginTop: 200, marginLeft: 100, }}
//                   source={{ uri: 'https://deckofcardsapi.com/static/img/5C.png' }}
//              />

//<Button title='press' onPress={() => more()} />


