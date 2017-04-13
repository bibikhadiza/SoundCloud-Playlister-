import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './utils/header/header'
import SC from 'soundcloud';
import SelectFieldExampleNullable from './utils/tabs/tab'
require('isomorphic-fetch');
require('es6-promise').polyfill();



SC.initialize({ client_id: 'd6i0wruU7ddayTqrhwszluW0i9aNBlb1'
});


class App extends Component {

  constructor(){
    super();
    this.state = {
      value: "",
      answer: [],
      list: "",
      genre: "disco"
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
      q: this.state.value,
      limit: 100
    }).then(function(tracks) {
      console.log(tracks);
    });
  }

  componentDidMount(){
    SC.get('/tracks', {
      genres: this.state.genre,
      limit: 50
    }).then(function(tracks) {
      console.log(tracks);
    });
  }


  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
        <Header handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.value}/>



      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
