/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';
import axios from 'axios';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-client-preset';
import { Query } from 'react-apollo';
//import gql from graphql-tag for making queries to our graphql server.
import gql from 'graphql-tag';




export default class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
    };
  }
  componentDidMount() {
    axios({
      url: 'https://graphql-pokemon.now.sh/',
      method: 'post',
      data: {
        query: `
          query PokemonList {
            pokemon(name: "Bulbasaur") {
              id
              number
              name
              attacks {
                special {
                  name
                  type
                  damage
                }
              }
              evolutions {
                id
                number
                name
                weight {
                  minimum
                  maximum
                }
                attacks {
                  fast {
                    name
                    type
                    damage
                  }
                }
              }
            }
          }
          `
      }
    })
    .then(res => {
      const PokemonList = res.data;
      this.setState({
         items:PokemonList
       });
    })
  }

 
  render() {
    const Data = this.state
    console.log(Data);
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}>
          <Text>TESTTT</Text>
        </View>
        <View style={{flex: 12, backgroundColor: 'skyblue', flexDirection : 'row', flexWrap: 'wrap',  justifyContent : 'center',}}>
          <View style={styles.head}>
            <Text>POKEMON</Text>
          </View>
          <View style={styles.head}>
            <Text>POKEMON</Text>
          </View>
          <View style={styles.head}>
            <Text>POKEMON</Text>
          </View>
          <View style={styles.head}>
            <Text>POKEMON</Text>
          </View>
          <View style={styles.head}>
            <Text>POKEMON</Text>
          </View>
          <View style={styles.head}>
            <Text>POKEMON</Text>
          </View>
          <View style={styles.head}>
            <Text>POKEMON</Text>
          </View>
          <View style={styles.head}>
            <Text>POKEMON</Text>
          </View>
          <View style={styles.head}>
            <Text>POKEMON</Text>
            {this.lapsList()}
          </View>
        </View>  
      </View>
    );
  }
  lapsList() {
    return this.state.items.map((data) => {
      return (
        <View><Text>{data.name}</Text></View>
      )
    })

}
};
const styles = StyleSheet.create({
  head : {
    flexWrap : 'wrap',
    width: 112,
    height: 112,
    borderRadius: 8,
    backgroundColor: 'blue',
    textAlign: 'center',
    marginRight: 5,
    marginTop : 5,
  }
});