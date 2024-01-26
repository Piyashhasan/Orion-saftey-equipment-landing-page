import Header from "../components/Header/Header";
import MainNav from "../components/MainNav/MainNav";
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
    </>
  );
};

export default Home;
