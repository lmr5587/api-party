import React, { Component } from 'react'

class Pokemon extends Component {
   state = {
    pokemon: {

      // avatar_url: '',
       name: '',
       base_experience: '',
       weight: '',
       height: '',
      // types: ''
    }
  }

   constructor(props) {
    super(props)
    this.fetchUserData(props)
  }

  fetchUserData(props) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${props.match.params.pokemon}`)
      .then(response => response.json())
      .then(pokemon => this.setState({ pokemon }))
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = (nextProps.location !== this.props.location)
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
  }
  render() {
    const { pokemon } = this.state
    return (
      <div className="pokemon">
        <h2>{pokemon.name}</h2>
        <h3>Base experience: {pokemon.base_experience}</h3>
        <h3>height: {pokemon.height}</h3>
        <h3>weight: {pokemon.weight}</h3>
        {/*<img src={user.avatar_url} alt="user"/>
        <a href={user.html_url} target="_">Link to {user.login}'s profile</a>*/}
      </div>
    )
  }
}
export default Pokemon