import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = {
        albums: []
    }

    componentWillMount() {
        axios.get( 'https://rallycoding.herokuapp.com/api/music_albums' )
            .then( response => {
                this.setState({
                    albums: response.data
                })
            } )
    }

    render() {

        let mappedAlbums = this.state.albums.map( ( album, i ) => {
            return (
                <View key={i}>
                    <AlbumDetail album={album} />
                </View>
            )
        } )

        return (
            <View>
                {mappedAlbums} 
            </View>
        )
    }
    
}

export default AlbumList;