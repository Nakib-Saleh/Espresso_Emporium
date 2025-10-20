import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { IoMdEye } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Product = ({ coffee, coffees, setCoffees }) => {


  const handleDelete = async (id) => {
    //console.log(id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://espresso-emporium-kp3u.onrender.com/coffee/${id}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  // console.log(data);
          
                  Swal.fire({
                    icon: "success",
                    title: "Deleted !!",
                    text: "Your coffee has been deleted",
                  });
                  const remaining = coffees.filter((coffee) => coffee._id !== id);
                  setCoffees(remaining);
                })
                .catch((err) => {
                  //console.log(err);
                  Swal.fire({
                    icon: "error",
                    title: "Error !!",
                    text: "Error Deleting Coffee try again later",
                  });
                });
        }
      });

    
  };
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-6 bg-[#F5F4F1] rounded-xl">
      <figure className="lg:w-1/3">
        <img src={coffee.photo} alt="" />
      </figure>
      <div>
        <h3>
          <b>Name: </b>
          {coffee.name}
        </h3>
        <h3>
          <b>Chef </b>
          {coffee.chef}
        </h3>
        <h3>
          <b>Category: </b>
          {coffee.category}
        </h3>
      </div>

      <div className="flex flex-row lg:flex-col">
        <Link to={`/coffee/${coffee._id}`}>
        <button className="btn text-xl text-white bg-[#D2B48C] hover:text-[#D2B48C] hover:bg-white"><IoMdEye /></button>
        </Link>
        <Link to={`/update/${coffee._id}`}>
            <button className="btn text-xl text-white bg-[#3C393B] hover:text-[#3C393B] hover:bg-white"><FaPen /></button>
        </Link>
        <button className="btn text-xl text-white bg-[#EA4744] hover:text-[#EA4744] hover:bg-white" onClick={() => handleDelete(coffee._id)}>
        <MdDeleteForever />
        </button>
      </div>
    </div>
  );
};

export default Product;
