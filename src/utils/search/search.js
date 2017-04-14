'use strict'

import React, {Component} from 'react';
import './search.css';


const SearchResults = ({ results, changeTrack }) => {
  const result = results.map((e) => {

    let image = null;
    if (e.artwork_url) {
      image = e.artwork_url;
    } else {
      image = "https://www.stjordalfoto.no/templates/newyork/images/no_image.png"
    } 

    return <div className="ui card" onSubmit={changeTrack}><div className="image"><img src={image}/></div><div className="content"><div className="meta"><span className="date">{e.user.username}</span></div><div className="description">{e.title}</div></div><div className="extra content"><form onSubmit={changeTrack} id={e.id} name={e.title}><input type="submit" value="play" className="ui button" /></form></div></div>
  })

  return(<div className="track_cards">
          {result}
        </div>
      )
};



export default SearchResults;
