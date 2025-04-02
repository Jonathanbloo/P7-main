import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import AproposData from '../JSON/apropos.json'
import Logo from '../assets/LOGO.png'
import logoFooter from '../assets/logonoirkasa.png'
import Collapse from '../components/Collapses.jsx'
import bannerApropos from '../assets/bannerApropos.jpeg'

function Apropos() {
  return (
    <>
      <section className="body__section">
        <Header logo={Logo} />
        <div className="bannerapropos">
          <div className="overlay"></div>
          <img
            className="banneraproposimg"
            src={bannerApropos}
            alt="Banner à propos"
          />
        </div>
        <div className="collapse collapse--apropos">
          {AproposData.map((item, i) => (
            <Collapse key={i} title={item.title} text={item.text} />
          ))}
        </div>
      </section>

      <Footer
        logofooter={logoFooter}
        textfooter="© 2020 Kasa. All rights reserved"
      />
    </>
  )
}

export default Apropos
