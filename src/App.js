import React, { Component } from 'react';
import './App.css';
import Header from './utils/header/header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Search from './utils/search/search'
import SC from 'soundcloud';
require('isomorphic-fetch');
require('es6-promise').polyfill();

SC.initialize({ client_id: 'd6i0wruU7ddayTqrhwszluW0i9aNBlb1'});


class App extends Component {
  constructor(){
    super();
    this.state = {
      value: "",
      answer: [],
      list: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }





  handleChange(event){
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    SC.get('/tracks', {
      q: this.state.value
    }).then(function(tracks) {
      console.log(tracks);
    });
  }

   componentDidMount(){
     let header = new Headers({
        'Access-Control-Allow-Origin':'*',
      });


     const options = {
       method: 'GET',
       mode: 'cors',
       headers: header
     }
  // fetch('https://api-v2.soundcloud.com/charts?kind=top&genre=soundcloud%3Agenres%3Aall-music&client_id=d6i0wruU7ddayTqrhwszluW0i9aNBlb1', options
  // ).then(response => response.json())
  // .then(json =>
  //   console.log(json)
  // )

  var url = 'https://api.soundcloud.com/tracks?client_id=d6i0wruU7ddayTqrhwszluW0i9aNBlb1';
  // $.getJSON(url, function(tracks) {
  // $(tracks).each(function(track) {
  //   console.log(track.title);
  //   }
  // });
  SC.get(url, options
  ).then(function(tracks) {
  console.log(tracks);
});
}




  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.value}/>
      </MuiThemeProvider>
    );
  }
}

export default App;
