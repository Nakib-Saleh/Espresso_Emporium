import { Link, useLoaderData } from "react-router-dom";
import "./DetailsPage.css";

const DetailsPage = () => {

  const coffee = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo } = coffee;

  return (
    <div className="backImg py-8 mx-auto">
      <Link to={"/"}>
        <button className="btn btn-ghost text-[#374151] text-2xl font-bold rancho hover:bg-[#D2B48C] hover:text-[#37415]">
          {" "}
          &#x2190; Back Home
        </button>
      </Link>

      <div className="flex flex-col md:flex-row items-center p-6 bg-[#F5F4F1] rounded-xl">
        <figure className="md:w-1/3">
          <img src={photo} alt="" className="w-full h-auto" />
        </figure>
        <div className="p-10">
            <h3 className="text-[#331A15] fon-bold text-[60px] rancho">Niceties</h3>
          <h3>
            <b>Name: </b>
            {name}
          </h3>
          <h3>
            <b>Chef </b>
            {chef}
          </h3>
          <h3>
            <b>Category: </b>
            {category}
          </h3>

          <h3>
            <b>Supplier: </b>
            {supplier}
          </h3>
          <h3>
            <b>Taste: </b>
            {taste}
          </h3>
          <h3>
            <b>Details: </b>
            {details}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
