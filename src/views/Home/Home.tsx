import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import Header from "../../components/Header/Header";
import FetchApi from '../../utils/Fetch';
import TodaysImage from "../../components/todaysImage/"
import { PostImage } from "../../types";
import { format, sub } from "date-fns";
import LastFiveDaysImages from "../../components/LastFiveDaysImages/LastFiveDaysImages";

const Home = () => {
    const [todaysImage, setTodayImage] = useState<PostImage>({});
    const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);

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

        
        const loadLast5DaysImages = async () => {
            try{
                const date = new Date();
                const todaysDay = format(date, 'yyyy-MM-dd');
                const fiveDaysAgoDate = format(sub(date, {days: 5}), 'yyyy-MM-dd');
                const lastFiveDaysImagesResponse = await FetchApi(`&start_date=${fiveDaysAgoDate}&end_date=${todaysDay}`);
                setLastFiveDaysImages(lastFiveDaysImagesResponse);    
            }catch(error){
                    console.log(error);
                }
        }
        
        loadTodaysImage().catch(null);
        loadLast5DaysImages().catch(null);    
    }, []);

    // console.log(lastFiveDaysImages);

    return (
        <View style={styles.container}>
            <Header />
            <TodaysImage {...todaysImage}/>
            <LastFiveDaysImages postImage={lastFiveDaysImages} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: 'rgba(7,26,93,255)',
    }
});

export default Home;
