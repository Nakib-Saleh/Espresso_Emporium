import { useRouteError, useNavigate } from "react-router-dom";
import errorimg from "../assets/images/404/404.gif";
const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      {/* <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
      <p className="text-lg text-gray-700">Something went wrong.</p>
      {error && (
        <p className="mt-2 text-gray-500">
          {error.status} - {error.statusText || error.message}
        </p>
      )}
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        onClick={() => navigate("/")}
      >
        Go Home
      </button> */}

      <button className="btn btn-ghost text-[#374151] text-2xl font-bold rancho" onClick={()=> navigate("/")}>
        {" "}
        &#x2190; Back Home
      </button>

      <figure>
        <img src={errorimg} alt="" />
      </figure>
      {error && (
        <p className="mt-2 text-gray-500">
          {error.status} - {error.statusText || error.message}
        </p>
      )}
    </div>
  );
};

export default ErrorPage;
