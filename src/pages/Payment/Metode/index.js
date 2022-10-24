//# style
import "./style.css"

//# components
import HeaderHero from "../../../components/Payment/HeaderHero"
import Navigation from "../../../components/LandingPage/Navigation"
import Footer from "../../../components/LandingPage/Footer"
import OrderSummaryCard from "../../../components/Payment/OrderSummaryCard"
import BankTransferCard from "../../../components/Payment/BankTransferCard"
import DetailOrderCard from "../../../components/Payment/DetailOrderCard"

const PaymentMethod = () => {
  return (
    <>
      <section>
        <Navigation />
        <HeaderHero />
        <OrderSummaryCard />
        <div className="payment-method-container">
          <BankTransferCard />
          <DetailOrderCard />
        </div>
        <Footer />
      </section>
    </>
  )
}

export default PaymentMethod
