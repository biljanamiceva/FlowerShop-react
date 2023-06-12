import './App.css';
import { Navbar, Footer } from './components';
import { Advantages, Header, Catalog, Contact, Testimonials} from './container';

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Advantages />
        <Catalog />
        <Contact />
        <Testimonials />
        <Footer />
        </div>
  )
}

export default HomePage