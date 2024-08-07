import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../types";
import Header from "../../components/Header/Header";

const Detail = () => {
    const { params: {title, url, explanation, date} } = useRoute<NativeStackScreenProps<RootStackParams, 'Detail'>['route']>();
    return(
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <Image source={{ uri: url }} style={styles.image} />
                <Text style={styles.title} >{title}</Text>
                <Text style={styles.date} >{date}</Text>
                <ScrollView style={styles.explanationContainer}>
                    <Text style={styles.explanation} >{ explanation }</Text>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(7,26,93,255)', // color azul nasa
    },
    content: {
        backgroundColor: '#2c449d',
        borderRadius: 32,
        marginVertical: 24,
        padding: 16,
        flex: 1
    },
    image: {
        width: '100%',
        height: '50%',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 32,
        marginBottom: 15
    },
    title: {   
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15
    },
    date: {
        color: '#FFF',
        fontSize: 16
    },
    explanationContainer: {
        marginVertical: 15,
    },
    explanation: {
        color: '#FFF',
        fontSize: 16
    }
})

export default Detail;