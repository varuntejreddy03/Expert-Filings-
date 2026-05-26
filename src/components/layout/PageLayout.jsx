import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import WhatsAppModal from '../modals/WhatsAppModal.jsx';

export default function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppModal />
    </>
  );
}
