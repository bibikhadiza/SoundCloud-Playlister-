'use strict'

import React, {Component} from 'react';
import SoundCloud from 'react-soundcloud-widget'
import './search.css';


const SearchResults = ({ results }) => {
  const play = () => {
    debugger;
  }

  const result = results.map((e) => {
    return <div className="ui card"><div className="image"><img src={e.artwork_url}/></div><div className="content"><div className="meta"><span className="date">{e.user.username}</span></div><div className="description">{e.title}</div></div><div className="extra content"><button className="ui button">Play</button></div></div>
  })

  return(<div className="track_cards">
          {result}
          {null}
        </div>
      )
};



export default SearchResults;
