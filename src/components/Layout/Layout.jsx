// components/Layout.js
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className='pt-4'>{children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;
