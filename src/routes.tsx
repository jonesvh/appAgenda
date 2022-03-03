import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./pages/home";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import auth from '@react-native-firebase/auth'
import { Text, TouchableOpacity } from "react-native";
import { Signin } from "./pages/signin";
import { ToSchedule } from "./pages/toSchedule";

export default function Routes () {
    const Stack = createNativeStackNavigator();
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(setUser)
        return subscriber
    }, [user])

    const handleLogout = () => {
        auth().signOut();
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                 {user ?
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{headerRight: () => <TouchableOpacity onPress={handleLogout}><Text>LogOut</Text></TouchableOpacity>}}
                    />
                :
                    <Stack.Screen
                        name="Login"
                        component={Signin}
                        options={{headerShown:false}}
                    />
                 }
                 <Stack.Screen
                    name="ToSchedule"
                    component={ToSchedule}
                 />
            </Stack.Navigator>
        </NavigationContainer>
    )
}