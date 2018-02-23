import React from 'react';
import { View, Text } from 'react-native';
// import axios from 'axios';

class AlbumList extends React.Component {
  state = {
    movies: []
  };

  componentWillMount() {
    fetch('http://rallycoding.herokuapp.com/api/music_albums')
      .then(res => res.json())
      .then(resData => {
        console.log(resData);
        this.setState({ movies: resData.movies });
      })
      .catch(err => console.log(err));

    // axios
    //   .get('https://rallycoding.herokuapp.com/api/music_albums')
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
  }

  render() {
    return (
      <View>
        <Text>Album List!!</Text>
      </View>
    );
  }
}

export default AlbumList;
