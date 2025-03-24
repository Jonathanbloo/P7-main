import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import AproposData from '../JSON/apropos.json'
import Logo from '../assets/logo-kasa.png'
import logoFooter from '../assets/logonoirkasa.png'
import Collapse from '../components/Collapses.jsx'
import bannerApropos from '../assets/bannerApropos.jpeg'
import '../styles/apropos.css'

function Apropos() {
  return (
    <div>
      <Header logo={Logo} />
      <div className="bannerapropos">
        <div className="overlay"></div>
        <img
          className="banneraproposimg"
          src={bannerApropos}
          alt="Banner à propos"
        />
      </div>
      <div className="collapse">
        {AproposData.map((item, i) => (
          <Collapse key={i} title={item.title} text={item.text} />
        ))}
      </div>

      <Footer
        logofooter={logoFooter}
        textfooter="© 2020 Kasa. All rights reserved"
      />
    </div>
  )
}

export default Apropos
