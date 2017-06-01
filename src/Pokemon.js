import React, { Component } from 'react'

class Pokemon extends Component {
   state = {
    user: {
      avatar_url: '',
      login: '',
      followers: '',
      following: '',
      location: '',
      html_url: ''
    }
  }

   constructor(props) {
    super(props)
    this.fetchUserData(props)
  }

  fetchUserData(props) {
    fetch(`http://pokeapi.co/${props.match.params.pokemon}`)
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
        {/*<img src={user.avatar_url} alt="user"/>
        <h2>{user.login}</h2>
        <h3>followers: {user.followers}</h3>
        <h3>following: {user.following}</h3>
        <h3>location: {user.location}</h3>
        <a href={user.html_url} target="_">Link to {user.login}'s profile</a>*/}
      </div>
    )
  }
}
export default Pokemon