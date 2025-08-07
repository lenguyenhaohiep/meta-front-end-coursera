import { useReservationDataContext } from "@/context/ReservationContext";
import { Alert, Button, Heading, Table, VStack } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { useEffect } from "react";

function Confirmation() {
    const { reservationData } = useReservationDataContext();
    const navigate = useNavigate();
    useEffect(() => {
        if (Object.keys(reservationData).length == 0) {
            navigate("/");
        }
    }, reservationData);
    return (
        <VStack>
            <Heading size="4xl">
                Reservation Confirmation
            </Heading>

            <Alert.Root status="success">
                <Alert.Indicator />
                <Alert.Title>
                    Reserved successfully ! Thanks for your reservation. Here is the summary, we'll send you a reminder.
                </Alert.Title>
            </Alert.Root>

            <Table.Root size="sm" striped>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>First Name</Table.Cell>
                        <Table.Cell>{reservationData.firstName}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Last Name</Table.Cell>
                        <Table.Cell>{reservationData.lastName}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Phone</Table.Cell>
                        <Table.Cell>{reservationData.phone}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Email</Table.Cell>
                        <Table.Cell>{reservationData.email}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Date</Table.Cell>
                        <Table.Cell>{dayjs(reservationData.date).format('DD/MM/YYYY')}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Time</Table.Cell>
                        <Table.Cell>{reservationData.time}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Number of guests</Table.Cell>
                        <Table.Cell>{reservationData.numberOfGuests}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Comments</Table.Cell>
                        <Table.Cell>{reservationData.comments}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root>


            <Link to="/">
                <Button>Home Page</Button>
            </Link>
        </VStack>
    );
}

export default Confirmation;