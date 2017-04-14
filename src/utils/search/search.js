'use strict'

import React, {Component} from 'react';
import SoundCloud from 'react-soundcloud-widget'
import './search.css';


const SearchResults = ({ results }) => {
  // const result = results.map((e) => {
  //   return <SoundCloud url={e.uri}/>
  //
  // })
  const result = results.map((e) => {
    return <div className="ui card"><div className="image"><img src={e.artwork_url}/></div><div className="content"><div className="meta"><span className="date">{e.user.username}</span></div><div className="description">{e.title}</div></div><div className="extra content"><button className="ui button">Play</button></div></div>
  })
  return(<div className="track_cards">{result}</div>

  )
};



// className SearchResults extends Component {
//
//   constructor(){
//     super();
//     this.result = this.result.bind(this)
//   }
//
//   result(){
//     return this.props.results.map((e) => {
//        <SoundCloud url={e.uri}/>
//     })
//   }
//
//
//   render() {
//     var track_url = 'https://api.soundcloud.com/tracks/253770481';
//     return (
//     <div>{this.result()}</div>
//     );
//   }
// }

export default SearchResults;
