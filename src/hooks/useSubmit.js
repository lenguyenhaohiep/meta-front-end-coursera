import { wait } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

import { useReservationDataContext } from "@/context/ReservationContext";


const useSubmit = () => {

    const [response, setResponse] = useState(null);

    const { setReservationData } = useReservationDataContext();

    const submit = async (data) => {
        await wait(1000);

        setResponse({
            type: 'success',
            message: "Reserved successfully",
        })
        setReservationData(data);
    }

    return { response, submit }

}

export default useSubmit;