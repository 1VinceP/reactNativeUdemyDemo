import React from 'react';
import { Text, View, Image } from 'react-native';

import Card from './Card';
import CardSection from './CardSection'

export default function AlbumDetail( { album } ) {
    const { title, artist, thumbnail_image, image } = album
    const { headerStyle, headerText, thumbnailStyle, thumbnailContainerStyle, imageStyle } = styles

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image source={{ uri: thumbnail_image}} style={thumbnailStyle} />
                </View>
                <View style={headerStyle}>
                    <Text style={headerText}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image source={{ uri: image }} style={imageStyle} />
            </CardSection>
        </Card>
    )
}

const styles = {
    headerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerText: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}