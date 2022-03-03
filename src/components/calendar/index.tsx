import { useState } from "react";
import { Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { Colors } from "../../assets/whiteLabel/colors";

export default function Calendar() {

    const date = new Date('2022/02/14')
    const [disableDays, setDisableDays] = useState([date])
    const [schedulingDate, setSchedulingDate] = useState(new Date())

    const handleDate = (date) => {
        let newDate = new Date(date)
        setSchedulingDate(newDate)
    }

    return (
        <View>
            <Text>Dia:</Text>
            <CalendarPicker
                months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
                weekdays={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']}
                onDateChange={(e) => handleDate(e)}
                startFromMonday={true}
                previousTitle="Anterior"
                nextTitle="Próximo"
                selectedDayColor={Colors.main.secondary}
                disabledDates={disableDays}
                dayShape="square"
                todayBackgroundColor={Colors.main.tertiary}
            >
            </CalendarPicker>
            
        </View>
    )
}