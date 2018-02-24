import React from 'react';
import { View, Text } from 'react-native';
// import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {
  state = {
    albums: []
  };

  componentWillMount() {
    fetch('http://rallycoding.herokuapp.com/api/music_albums')
      .then(res => res.json())
      .then(resData => {
        this.setState({ albums: resData });
      })
      .catch(err => console.log(`Api Request Albums Failed ${err}`));

    // axios
    //   .get('https://rallycoding.herokuapp.com/api/music_albums')
    //   .then(res => console.log(res))
    //   .catch(err => console.log(`Api Request Albums Failed ${err}`));
  }

  // renderAlbums() {
  //   return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
  // }

  render() {
    const { albums } = this.state;

    return <View>{albums.map(album => <AlbumDetail key={album.title} album={album} />)}</View>;
  }
}

export default AlbumList;
