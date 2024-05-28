import React, { FC } from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native';

import { PostImage } from '../../types';

const TodaysImage:FC<PostImage> = ({url, title, date}) => {
    return( 
        <View style={styles.container}>
            <Image source={{ uri: url}} style={styles.image}/>

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            
            <View style={styles.bottonContainer}>
                <Button title='View' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2c449d',
        marginVertical: 16,
        marginHorizontal: 10,
        borderRadius: 32,
        padding: 16,
    },
    image: {
        width: '100%',
        height: 190,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 32,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        marginVertical: 12,
        fontWeight: 'bold'
    },
    date: {
        color: '#fff',
        fontSize: 16,

    },
    bottonContainer: {
        alignItems: 'flex-end',
        backgroundColor: '#2196f300!important'
    }
});

export default TodaysImage;