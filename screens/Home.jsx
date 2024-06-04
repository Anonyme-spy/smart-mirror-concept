import {StyleSheet, FlatList, RefreshControl, TouchableOpacity, Text} from "react-native";
import PalettePreview from "../components/PalettePreview";
import {useState, useCallback, useEffect} from "react";


export default function Home({navigation, route}) {
    const [colorPalettes, setColorPalettes] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const newColorPalette = route.params ? route.params.newColorPalette : undefined;

    const fetchColorPalettes = useCallback(async () => {
            const result = await fetch('https://color-palette-api.kadikraman.now.sh/palettes');
            if (result.ok) {
                const palettes = await result.json();
                setColorPalettes(palettes);
            }
        }, []
    );

    useEffect(() => {
        fetchColorPalettes();
    }, []);

    useEffect(() => {
        if (newColorPalette) {
            setColorPalettes(palettes => [newColorPalette, ...palettes]);
        }
    }, [newColorPalette]);

    const handleRefresh = useCallback(async () => {
        setIsRefreshing(true);
        await fetchColorPalettes();
        setTimeout(() => {

            setIsRefreshing(false);
        }, 1000);
    }, []);

    return (
        <FlatList data={colorPalettes} keyExtractor={item => item.paletteName} renderItem={({item}) => (
            <PalettePreview handlePress={() => {
                navigation.navigate("ColorPalette", item)
            }} item={item}/>
        )
        }
                  refreshing={isRefreshing}
                  onRefresh={handleRefresh}
                  ListHeaderComponent={<TouchableOpacity onPress={() => {
                      navigation.navigate("ColorPaletteModal")

                  }}>
                      <Text style={styles.text}>ColorPaletteModal</Text>
                  </TouchableOpacity>
                  }
        />)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'teal',
        textAlign: 'center',
        marginTop: 10,
    }
});