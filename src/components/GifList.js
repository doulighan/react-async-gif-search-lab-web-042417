import React from 'react'

const GifList = ({gifs}) => {
  return (
    <ul>
      {gifs.map( g => (
        <img src={`https://media.giphy.com/media/${g.id}/giphy.gif`}/>
      ))}
    </ul>
  )
}

export default GifList