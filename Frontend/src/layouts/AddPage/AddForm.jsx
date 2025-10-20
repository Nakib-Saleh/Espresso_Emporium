import { Link } from "react-router-dom";
import "./AddForm.css";
import Swal from "sweetalert2";

const AddForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const chef = e.target.chef.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const photo = e.target.photo.value;

    const data = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    //console.log(data);

    fetch("https://espresso-emporium-five.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        Swal.fire({
          icon: "success",
          title: "Added !!",
          text: "Your coffee has been added",
        });

        e.target.reset();
      })
      .catch((err) => {
        //console.log(err);
        alert("Error Adding Coffee");
      });
  };

  return (
    <div className="backImg py-8 mx-auto ">
      <Link to={"/"}>
        <button className="btn btn-ghost text-[#374151] text-2xl font-bold rancho hover:bg-[#D2B48C] hover:text-[#37415]">
          {" "}
          &#x2190; Back Home
        </button>
      </Link>
      <div className=" px-4 md:px-28 py-16 bg-[#F4F3F0]">
        <div className="text-center lg:px-20 rancho mb-7">
          <h1 className="text-[#374151] font-bold text-[40px]">
            Add New Coffee
          </h1>
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form
          className="md:grid md:grid-cols-2 gap-6 poppins"
          onSubmit={handleSubmit}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <input
              type="text"
              name="chef"
              placeholder="Enter coffee chef"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter coffee category"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter Photo Url"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6 col-span-2">
            <button className="btn btn-primary bg-[#D2B48C] border-[#331A15] text-[#331A15] rancho text-xl hover:bg-transparent hover:border-[#331A15]">
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
