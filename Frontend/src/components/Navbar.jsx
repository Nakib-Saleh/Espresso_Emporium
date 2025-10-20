import coffeeImg from "../assets/images/more/logo1.png";
import "./navbar.css"
const Navbar = () => {
  return (
    <div className="nav h-28 w-full flex items-center justify-center">
      <figure className="max-w-20">
        <img src={coffeeImg} alt="" />
      </figure>
      <h3 className="rancho text-[45px] font-bold text-white">Espresso Emporium</h3>
    </div>
  );
};

export default Navbar;
