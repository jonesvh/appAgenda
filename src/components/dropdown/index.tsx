import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import RNPickerSelect from 'react-native-picker-select'
import firestore from '@react-native-firebase/firestore'
import { Colors } from "../../assets/whiteLabel/colors"

export default function DropDown() {

    type ServiceProps = {
        id: string;
        name: string;
        price: number;
        time: number;
    }

    const [services, setServices] = useState<ServiceProps[]>([])
    const [service, setService] = useState('')

    useEffect(() => {
        const subscribe = firestore()
            .collection('services')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }) as ServiceProps[];
                setServices(data)
            })
        return () => subscribe()
    }, [services])

    const handleService = (service) => {
        setService(service)
    }
    return (
        <View>
            <Text
                style={{
                    marginBottom: 20
                }}
            >Serviço:</Text>
            <RNPickerSelect
                onValueChange={handleService}
                items={services.map(service => {
                    return { label: service.name, value: service.id, fontSize:20}
                })}
                style={{
                    viewContainer: {
                        backgroundColor: Colors.input.background.primary,
                        paddingHorizontal: 100,
                        paddingVertical:12,
                        borderRadius:10,
                    },
                    placeholder: {
                        color: Colors.input.background.secondary,
                        fontSize:16,
                    },
                    inputIOS:{
                        color: '#112D2C',
                        fontSize:16
                    }
                }}
                placeholder={{label: 'Selecione um serviço...', value:0}}
            />
        </View>
    )
}