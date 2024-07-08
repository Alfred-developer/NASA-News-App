import React, {FC} from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { PostImage as PostImageTypes  } from "../../types";
import PostImage from "../PostImage/PostImage";

const LastFiveDaysImages: FC<{postImage?: PostImageTypes[]}> =  ({postImage}) => {
    console.log('PROPS', postImage);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Last 5 days</Text>
            <ScrollView style={styles.content}>
                {postImage?.map(postImage => (
                    <PostImage key={`post-image-${postImage.title}`} {...postImage} />
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8
    },
    title: {
        fontSize: 16,
        marginBottom: 18,
        color: '#fff'
    },
    content: {
        paddingHorizontal: 0
    }
});

export default LastFiveDaysImages;
