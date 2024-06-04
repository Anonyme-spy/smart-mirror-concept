import ColorBox from "../components/ColorBox";
import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";

export default function ColorPalette({route}) {
    const {colors} = route.params;
    const {paletteName} = route.params;

    return (

        <View style={styles.container}>
            <Text style={styles.text}>I don't know man i just woke up one day and boom</Text>
            <View style={{paddingBottom: 20}}>
                <FlatList
                    data={colors}
                    renderItem={({item}) => <ColorBox name={item.palleteName} hexCode={item.hexCode}/>}
                    keyExtractor={item => item.colorName}
                    ListHeaderComponent={<Text style={[styles.text, {fontSize: 24}]}>{paletteName}</Text>}
                    contentContainerStyle={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    text: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    c: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        marginVertical: 10,
    }
});