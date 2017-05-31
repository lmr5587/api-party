import React, { Component } from 'react'
// import './SpotifyUser.css'

class SpotifyUser extends Component {
  state = {
    user: {
      avatar_url: '',
      login: '',
    //   followers: '',
    //   following: '',
      location: '',
      html_url: ''
    }
  }
  
  constructor(props) {
    super(props)
//     this.fetchUserData(props)
//   }

//   fetchUserData(props) {
//     fetch(`https://api.spotify.com/v1/me ${props.match.params.username}`)
//       .then(response => response.json())
//       .then(user => this.setState({ user }))
//   }

//   componentWillReceiveProps(nextProps) {
//     const locationChanged = (nextProps.location !== this.props.location)
//     if (locationChanged) {
//       this.fetchUserData(nextProps)
//     }
  }

  render() {
    const { user } = this.state
    return (
        <div className="spotify-user">
                <dl className="dl-horizontal">
                    <dt>Display name</dt><dd className="clearfix">{user.login}</dd>
                    {/*<dt>Id</dt><dd>{{id}}</dd>*/}
                    {/*<dt>Email</dt><dd>{{email}}</dd>*/}
                    {/*{<dt>Spotify URI</dt><dd><a href="{{external_urls.spotify}}">{{external_urls:spotify}}</a></dd>*/}
                    <dt>Link</dt><dd><a href={user.html_url} target="_">Link to {user.login}'s profile</a></dd>
                    <dt>Profile Image</dt><dd className="clearfix"> <img src={user.avatar_url} alt="user"/></dd>
                    <dt>Location</dt><dd>{user.location}</dd>
                </dl>
                </div>

       
    )
  }
}

export default SpotifyUser