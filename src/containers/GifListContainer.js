import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gifs: []
    }
  }

  componentWillMount() {
    this.getFirstThreeGifs('cats')
  }

  getFirstThreeGifs(search) {
    const gifs = []
    const URL = 'http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=dc6zaTOxFJmzC'
    fetch(URL)
      .then(resp => resp.json())
      .then(data => data['data'])
      .then(data => this.setState({gifs: data.slice(0, 3)}))
  }

  submit(e) {
    e.preventDefault()
    this.getFirstThreeGifs(e.target.search.value)
  }

  render () {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch submit={this.submit.bind(this)} />
      </div>
    )
  }
}

export default GifListContainer