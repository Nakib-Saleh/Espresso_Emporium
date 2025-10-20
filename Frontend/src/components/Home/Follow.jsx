
import cup_1 from "../../assets/images/cups/Rectangle 10.png";
import cup_2 from "../../assets/images/cups/Rectangle 11.png";
import cup_3 from "../../assets/images/cups/Rectangle 12.png";
import cup_4 from "../../assets/images/cups/Rectangle 13.png";
import cup_5 from "../../assets/images/cups/Rectangle 14.png";
import cup_6 from "../../assets/images/cups/Rectangle 15.png";
import cup_7 from "../../assets/images/cups/Rectangle 9.png";
import cup_8 from "../../assets/images/cups/Rectangle 16.png";


const Follow = () => {
    return (
        <div>
            <div className="text-center rancho mb-4">
                <h3>Follow Us Now</h3>
                <h1 className="text-[45px] font-bold">Follow on Instagram</h1>
            </div>
            <div className="w-10/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
                <figure>
                    <img src={cup_1} alt="" />
                </figure>
                <figure>
                    <img src={cup_2} alt="" />
                </figure>
                <figure>
                    <img src={cup_3} alt="" />
                </figure>

                <figure>
                    <img src={cup_4} alt="" />
                </figure>
                <figure>
                    <img src={cup_5} alt="" />
                </figure>
                <figure>
                    <img src={cup_6} alt="" />
                </figure>
                <figure>
                    <img src={cup_7} alt="" />
                </figure>
                <figure>
                    <img src={cup_8} alt="" />
                </figure>

            </div>
        </div>
    );
};

export default Follow;