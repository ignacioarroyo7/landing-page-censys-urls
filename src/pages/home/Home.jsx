import BannerSection from "./components/BannerSection";
import ServicesSection from "./components/ServicesSection";
import UrlSection from "./components/UrlSection";
import UserSection from "./components/UserSection";

const Home = () => {
 
  return (
    <>
      <div>
        <BannerSection/>
      </div>
      <div>
      <UrlSection/>
    </div>
      {/* <div>
      <ServicesSection/>
    </div>
  <div>
    <UserSection/>
  </div> */}
    </>
  );
};

export default Home;
