import React from 'react';
import './searchResults.css';


const SearchResults = ({ results, changeTrack }) => {

  const result = results.map((e, i) => {
    let image = null;
    if (e.artwork_url) {
      image = e.artwork_url;
    } else {
      image = "https://www.stjordalfoto.no/templates/newyork/images/no_image.png"
    }

    return <div className="ui card" onSubmit={changeTrack} key={i}><div className="image"><img src={image} alt=""/></div><div className="content"><div className="meta"><span className="date"><a href={e.user.permalink_url} target="_blank">{e.user.username}</a></span></div><div className="description"><a href={e.permalink_url} target="_blank">{e.title}</a></div></div><div className="extra content"><form onSubmit={changeTrack} id={e.id} name={e.title}><input type="submit" value="play" className="ui button" /></form></div></div>
  })

  return(
    <div className="track_cards">
      {result}
    </div>
  )
};

export default SearchResults;
