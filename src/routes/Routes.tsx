import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../views/Home/Home";
import Detail from "../views/Detail/Detail";
import { RootStackParams } from "../types";

const Stack = createNativeStackNavigator<RootStackParams>();

const routeScreenDefaultParams = {
    headerStyle: {
        backgroundColor: 'rgba(7,26,93,255)'
    },
    headerTitleStyle: {
        color: '#FFF'
    }
}

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                name="Home" 
                component={Home}
                options={routeScreenDefaultParams}
                />
                <Stack.Screen 
                name="Detail" 
                component={Detail}
                options={routeScreenDefaultParams}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;