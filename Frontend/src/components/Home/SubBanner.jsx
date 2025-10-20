import img1 from "../../assets/images/icons/1.png";
import img2 from "../../assets/images/icons/2.png";
import img3 from "../../assets/images/icons/3.png";
import img4 from "../../assets/images/icons/4.png";

const SubBanner = () => {
  return (
    <div className=" rancho grid grid-cols-2 px-3 lg:grid-cols-6 gap-10 bg-[#ECEAE3] py-14 ">
      <div className="max-w-[250px] lg:col-start-2">
        <img src={img1}></img>
        <h1 className="text-[#331A15] text-2xl font-bold">Awesome Aroma</h1>
        <p>You will definitely be a fan of the design & aroma of your coffee</p>
      </div>
      <div className="max-w-[250px]">
        <img src={img2}></img>
        <h1 className="text-[#331A15] text-2xl font-bold" >Awesome Aroma</h1>
        <p>You will definitely be a fan of the design & aroma of your coffee</p>
      </div>
      <div className="max-w-[250px]">
        <img src={img3}></img>
        <h1 className="text-[#331A15] text-2xl font-bold" >Awesome Aroma</h1>
        <p>You will definitely be a fan of the design & aroma of your coffee</p>
      </div>
      <div className="max-w-[250px]">
        <img src={img4}></img>
        <h1 className="text-[#331A15] text-2xl font-bold" >Awesome Aroma</h1>
        <p>You will definitely be a fan of the design & aroma of your coffee</p>
      </div>
    </div>
  );
};

export default SubBanner;
