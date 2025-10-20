import Follow from "../components/Home/Follow";
import HomeBanner from "../components/Home/HomeBanner";
import Products from "../components/Home/Products";
import SubBanner from "../components/Home/SubBanner";

const HomePage = () => {
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <HomeBanner></HomeBanner>
      </header>
      <div>
        <SubBanner></SubBanner>
      </div>

      <div className="mt-32 mb-32 space-y-32">
        <Products></Products>
        <Follow></Follow>
      </div>
      
    </div>
  );
};

export default HomePage;
