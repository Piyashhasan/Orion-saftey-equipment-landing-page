import Certification from "../components/Certification/Certification";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/FooterBottom/FooterBottom";
import Header from "../components/Header/Header";
import MainNav from "../components/MainNav/MainNav";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Product from "../components/Product/Product";
import Protection from "../components/Protection/Protection";
import SafetyShop from "../components/SafetyShop/SafetyShop";
import Services from "../components/Services/Services";
import TopNav from "../components/TopNav/TopNav";

const Home = () => {
  return (
    <>
      {/* --- Top nav start --- */}
      <TopNav />
      {/* --- Top nav end --- */}

      {/* --- Main nav start --- */}
      <MainNav />
      {/* --- Main nav end --- */}

      {/* --- Header start --- */}
      <Header />
      {/* --- Header end --- */}

      {/* --- Safety shop section start --- */}
      <SafetyShop />
      {/* --- Safety shop section end --- */}

      {/* --- Services section start --- */}
      <Services />
      {/* --- Services section end --- */}

      {/* --- Certificate and Calibration section start --- */}
      <Certification />
      {/* --- Certificate and Calibration section end --- */}

      {/* --- Product section start --- */}
      <Product />
      {/* --- Product section end --- */}

      {/* --- Protection section start --- */}
      <Protection />
      {/* --- Protection section end --- */}

      {/* --- News letter section start --- */}
      <NewsLetter />
      {/* --- News letter section end --- */}

      {/* --- Footer section start --- */}
      <Footer />
      {/* --- Footer section end --- */}

      {/* --- Bottom Footer section start --- */}
      <FooterBottom />
      {/* --- Bottom Footer section end --- */}
    </>
  );
};

export default Home;
