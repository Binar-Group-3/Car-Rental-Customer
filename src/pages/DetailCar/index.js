import { useParams } from "react-router-dom"
import { useEffect } from "react"

//# redux
import { useDispatch } from "react-redux"
import { handleCar } from "../../redux/actions/carAction"

//# components
import Navigation from "../../components/LandingPage/Navigation"
import DetailCarResult from "../../components/DetailCarResult"
import Footer from "../../components/LandingPage/Footer"

const Car = () => {
  const dispatch = useDispatch()
  const param = useParams()

  useEffect(() => {
    const id = param.id
    dispatch(handleCar(id))
  }, [])

  return (
    <div>
      <Navigation />
      <DetailCarResult />
      <Footer />
    </div>
  )
}
export default Car
