import "./style.css"
import carImg from "../../../assets/img_car.png"
import { ButtonSewa } from "../../../const/staticData"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="hero__container" id="hero">
      <div className="container hero__columns">
        <div className="hero__info">
          <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <div>
            <Link to="/carimobil">{ButtonSewa}</Link>
          </div>
        </div>
        <div className="hero__image">
          <img src={carImg} alt="Binar Car" />
        </div>
      </div>
    </section>
  )
}

export default Hero
