import Header from '../components/Header.jsx'
import Banner from '../components/Banner.jsx'
import Card from '../components/Card.jsx'
import Footer from '../components/Footer.jsx'
import bannerHome from '../assets/Bannerhome.jpeg'
import Logo from '../assets/LOGO.png'
import logoFooter from '../assets/logonoirkasa.png'

function Home() {
  return (
    <section className="body__section">
      <section className="header__section">
        <Header logo={Logo} />
      </section>
      <section className="banner__section">
        <Banner
          imageHome={bannerHome}
          titleHome="Chez vous, partout et ailleurs"
        />
      </section>
      <section className="card__section">
        <Card />
      </section>
      <Footer
        logofooter={logoFooter}
        textfooter="© 2020 Kasa. All rights reserved"
      />
    </section>
  )
}

export default Home
