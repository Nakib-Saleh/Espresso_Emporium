
import { use, useEffect, useState } from "react";
import "./Products.css";
import { Link, useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
    const [coffees, setCoffees] = useState([]);

    const data = useLoaderData();

    useEffect(() => {
        setCoffees(data);
    }, [data]);



    return (
        <div className="productsImg ">
            <div className="text-center rancho mb-4">
                <h3>--- Sip & Savor ---</h3>
                <h1 className="text-[45px] font-bold">Our Popular Products = {coffees.length}</h1>
                <Link to={"/coffee"}>
                <button className="btn btn-primary bg-[#E3B577] border-[#331A15] text-[#331A15] text-xl hover:bg-[#F5F4F1] hover:border-[#331A15]">Add Coffee</button>
                </Link>
            </div>

            <div className="w-10/12 mx-auto grid md:grid-cols-2 gap-3">
                {
                    coffees.map((coffee)=> <Product coffee={coffee} key={coffee._id} coffees={coffees} setCoffees={setCoffees}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;