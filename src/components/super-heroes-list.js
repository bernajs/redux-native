import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class SuperHeroesList extends Component{
  renderList(){
    return(
      this.props.superHeroes.map((heroe, key) => {
        return(
          <Text key={key}>{heroe.superhero}</Text>
        )
      })
    )
  }
  render(){
    return(
      <View>
        <Text>Cuatro hermanos netflix</Text>
        {this.renderList()}
      </View>
    )
  }
}

const mapStateToProps = ({ superHeroes }) =>{ return { superHeroes } }

export default connect(mapStateToProps)(SuperHeroesList)
