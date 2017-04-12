import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Search from './utils/search/search'
import SC from 'soundcloud';
import SelectFieldExampleNullable from './utils/tabs/tab'
require('isomorphic-fetch');
require('es6-promise').polyfill();
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'


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
      q: this.state.value
    }).then(function(tracks) {
      console.log(tracks);
    });
  }

   componentDidMount(){
     SC.get('/tracks', {
       genre: this.state.genre
     }).then(function(tracks) {
       console.log(tracks);
     });
   }



  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
        <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.value}/>



      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
