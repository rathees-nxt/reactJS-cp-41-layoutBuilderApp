// Write your code here
import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'

const Layout = () => (
  <div className="layouts-container">
    <Header />
    <div className="layout-container">
      <Body />
    </div>
    <Footer />
  </div>
)

export default Layout
