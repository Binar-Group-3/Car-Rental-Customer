import { Routes, Route } from "react-router-dom"
import DetailCar from "./pages/DetailCar"
import Home from "./pages/Home"
import SearchCars from "./pages/SearchCars"
import PaymentMethod from "./pages/Payment/Metode"
import PayingProcess from "./pages/Payment/Paying"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="carimobil" element={<SearchCars />} />
        <Route path="detailmobil/:id" element={<DetailCar />} />
        <Route path="payment/metode" element={<PaymentMethod />} />
        <Route path="payment/paying" element={<PayingProcess />} />
      </Routes>
    </div>
  )
}

export default App
