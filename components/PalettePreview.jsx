import {Text, TouchableOpacity, StyleSheet, FlatList} from "react-native";

export default function PalettePreview({item, handlePress}) {
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>{item.paletteName}</Text>
            <FlatList
                horizontal={true}
                data={item.colors.slice(0, 5)}
                keyExtractor={item => item.colorName}
                renderItem={({item}) => (
                    <Text style={{
                        backgroundColor: item.hexCode,
                        width: 50,
                        height: 50,
                        marginRight: 10
                    }}>{item.colorName}</Text>
                )}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
});