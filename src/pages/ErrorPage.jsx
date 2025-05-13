import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import image_404 from '../assets/image_404.png'
import Logo from '../assets/logo-kasa.png'
import Error404 from '../components/Error.jsx'
import logoFooter from '../assets/logonoirkasa.png'

function ErrorPage() {
  return (
    <>
      <section className="body__section">
        <Header logo={Logo} />
        <Error404
          image404={image_404}
          text404={
            <>
              Oups! La page que{' '}
              <span className="line-break-mobile">
                vous demandez n&#39;existe pas.
              </span>
            </>
          }
          backhome="Retourner sur la page d'accueil"
        />
      </section>
      <Footer
        logofooter={logoFooter}
        textfooter="© 2020 Kasa. All rights reserved"
      />
    </>
  )
}

export default ErrorPage
