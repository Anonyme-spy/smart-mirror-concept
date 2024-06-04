import 'react-native-gesture-handler';
import React from "react";
import Home from "./screens/Home";
import ColorPalette from "./screens/ColorPalette";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import ColorPaletteModal from "./screens/ColorPaletteModal";

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => (
    <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Home}/>
        <MainStack.Screen name="ColorPalette" component={ColorPalette}
                          options={({route}) => ({title: route.params.paletteName})}
        />
    </MainStack.Navigator>
);

export default function App() {


    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{presentation: "modal"}}>
                <RootStack.Screen name="Main" component={MainStackScreen} options={{headerShown: false}}/>
                <RootStack.Screen name="ColorPaletteModal" component={ColorPaletteModal}/>
            </RootStack.Navigator>
        </NavigationContainer>
    );
}


