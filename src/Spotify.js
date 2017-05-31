import React, { Component } from 'react'
import{ Route } from 'react-router-dom'
import SpotifyUser from './SpotifyUser'
import './Spotify.css'

class Spotify extends Component {
    state={
        username:''
    }
    // handleChange = (ev) => {
    //     const username = ev.currentTarget.value
    //     this.setState({ username })
    // }
    // handleSubmit = (ev) => {
    //     ev.preventDefault()
    //     this.props.history.push(`/spotify/${this.state.username}`)
    // }
    render() {
        return (
        <div>
            <img className="spotify-logo" src="https://vulcanpostcdn.blob.core.windows.net/brands-page/images/spotify/spotify-logo.png" alt="spotify"/>
            
            <div id="login">
            <a href="/login" className="log-in">Log in to Spotify</a>
            </div>

            <div id="loggedin">
            <div id="user-profile">
            </div>
            </div>

            <script id="user-profile-template" type="text/x-handlebars-template">
            {/*<h1>Logged in as {{display_name}}</h1>*/}
            <div className="media">
                <div className="pull-left">
                <img className="media-object" width="150" src="{{images.0.url}}" />
                </div>
                <SpotifyUser/>
            </div>
            </script>

    </div>
    )
  }
}

export default Spotify