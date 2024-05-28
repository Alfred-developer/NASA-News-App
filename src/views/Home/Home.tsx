import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import Header from "../../components/Header/Header";
import FetchApi from '../../utils/Fetch';
import TodaysImage from "../../components/todaysImage/"
import { PostImage } from "../../types";

const Home = () => {
    const [todaysImage, setTodayImage] = useState<PostImage>({});

    useEffect(() => {
        const loadTodaysImage = async () => {
            try{
                const todaysImageResponse = await FetchApi();
                setTodayImage(todaysImageResponse);
            }catch(error){
                console.error(error);
                setTodayImage({});
            }
        };

        loadTodaysImage().catch(null);
    }, []);

    console.log(todaysImage);

    return (
        <View style={styles.container}>
            <Header />
            <TodaysImage {...todaysImage}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20
    }
});

export default Home;
