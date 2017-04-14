import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './utils/header/header'
import SC from 'soundcloud';
import SearchResults from "./utils/search/search"
import Player from 'react-soundcloud-player'
SC.initialize({ client_id: 'd6i0wruU7ddayTqrhwszluW0i9aNBlb1'
});


class App extends Component {

  constructor(){
    super();
    this.state = {
      value: "",
      api_results: [],
      genre: "disco",
      trackName: null,
      trackId: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this)
    this.changeTrack = this.changeTrack.bind(this)
  }


  handleChange(event){
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    SC.get('/tracks', {
      q: this.state.value,
      limit: 100
    }).then((tracks) => {
      this.setState({
        api_results: tracks
      })
    })
  }

  handleGenreChange(event){
    SC.get('/tracks', {
      genres: event.target.value,
      limit: 50
    }).then((tracks) => {
      this.setState({
        api_results: tracks
      })
    })
  }

  componentWillMount(){
    SC.get('/tracks', {
      genres: this.state.genre,
      limit: 50
    }).then((tracks) => {
      this.setState({
        api_results: tracks
      })
    })
  }

  changeTrack(event){
    event.preventDefault()
    this.setState({
      trackId: event.target.id,
      trackName: event.target.name
    })
  }

  render() {
    let player = null;
    if (this.state.trackId) {
      player = <Player audio_id={this.state.trackId} title={this.state.trackName}/>;
    } else {
      player = null;
    }
    
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
        <Header handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.value} onGenreChange={this.handleGenreChange}/>
        <SearchResults results={this.state.api_results} changeTrack={this.changeTrack}/>
          {player}
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
