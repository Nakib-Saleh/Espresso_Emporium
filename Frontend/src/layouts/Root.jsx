import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Root = () => {
  const navigation = useNavigation();

  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        {navigation.state === "loading" ? (
          <div className="text-center mt-96">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <Outlet></Outlet>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
