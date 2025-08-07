import { Provider } from "@/components/ui/provider"

import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'

import Layout from "./custom/Layout";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation"
import About from "./pages/About";
import MenuPage from "./pages/MenuPage";
import Confirmation from "./pages/Confirmation";
import { ReservationDataProvider } from "./context/ReservationContext";

function App() {
  return (
    <ReservationDataProvider>
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="menu" element={<MenuPage />} />
              <Route path="reservation" element={<Reservation />} />
              <Route path="confirmation" element={<Confirmation />} />
              <Route path="about" element={<About />} />
            </Route>
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ReservationDataProvider>
  )
}

export default App;
