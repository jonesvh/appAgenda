import Calendar from "../../components/calendar";
import DropDown from "../../components/dropdown";
import { CalendarView, Container, HourView, ServicesView } from "./styles";

export function ToSchedule() {
    return (
        <Container>
            <ServicesView>
                <DropDown />
            </ServicesView>
            <CalendarView>
                <Calendar />
            </CalendarView>
            <HourView>
                <DropDown />
            </HourView>
            {/* {service ? <Calendar/> : null} */}

            {/* <Text>{`${service}  -  ${schedulingDate.getDate()}/${schedulingDate.getMonth() + 1}/${schedulingDate.getFullYear()}`}</Text> */}

        </Container>

    )
}