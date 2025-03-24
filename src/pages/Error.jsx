import Header from '../components/Header'
import Footer from '../components/Footer.jsx'
import image_404 from '../assets/image_404.png'
import Logo from '../assets/logo-kasa.png'
import Error404 from '../components/Error404.jsx'
import logoFooter from '../assets/logonoirkasa.png'

function Error() {
  return (
    <div>
      <Header logo={Logo} />
      <Error404
        image404={image_404}
        text404="Oups! La page que vous demandez n'existe pas."
        backhome="Retourner sur la page d'accueil"
      />
      <Footer
        logofooter={logoFooter}
        textfooter="© 2020 Kasa. All rights reserved"
      />
    </div>
  )
}

export default Error
