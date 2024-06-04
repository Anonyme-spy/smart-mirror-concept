import {Text, View, StyleSheet} from "react-native";
import React from "react";


const ColorBox = (props) => {
    let color = props.hexCode || "red";

    const TextColors = {
        color: parseInt(props.hexCode.replace("#", ""), 16) > 0xffffff / 1.3 ? "black" : "white"
    }

    return (<View style={[styles.c, {backgroundColor: color}]}>
        <Text
            style={TextColors}>{props.name ? props.name : "IDK man"} : {props.hexCode ? props.hexCode : "I just woke up 1 day and BOOM"}</Text>
    </View>);
};

const styles = StyleSheet.create({
    c: {
        //  width: "70%",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        marginVertical: 10,
        paddingHorizontal: "30%",
    }
});

export default ColorBox;
