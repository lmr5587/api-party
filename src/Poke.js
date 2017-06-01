import React, { Component } from 'react'
import{ Route } from 'react-router-dom'
import Pokemon from './Pokemon'
import './Poke.css'

class Poke extends Component {
    state={
        pokemon:''
    }
    render() {
        return (
        <div className='poke'>
                <img className="pokemon-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokemon"/>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <input type="text" 
                    //value={this.state.username} 
                    //onChange={this.handleChange}
                    />
                    </div>
                    <div>
                        <button type="submit">Look up Pokemon</button>
                    </div>
                </form>
      {/*<Route exact path='/github' render={() => (
          <h3>Please enter a username to search on Github</h3> 
        )} />
        <Route path='/github/:username' component={GithubUser} />
      */}</div>
    )
  }
}

export default Poke