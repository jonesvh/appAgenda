import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export function Home({navigation}) {
    return (
        <View
            style={{flex:1, justifyContent:"center", alignItems:"center"}}
        >
            <TouchableOpacity
                onPress={() => navigation.navigate('ToSchedule')}
            >
                <Text>
                    Agendar Horario
                </Text>
            </TouchableOpacity>
        </View>
    )
}