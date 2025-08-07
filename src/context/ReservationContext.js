import { createContext, useContext, useState } from "react";

const ReservationContext = createContext(null);

export const ReservationDataProvider = ({ children }) => {
    const [reservationData, setReservationData] = useState({});

    return (
        <ReservationContext.Provider value={{ reservationData, setReservationData }}>
            {children}
        </ReservationContext.Provider>
    );
}

export const useReservationDataContext = () => useContext(ReservationContext);