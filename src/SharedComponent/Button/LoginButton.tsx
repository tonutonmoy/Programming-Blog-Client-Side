import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link
      to="/login"
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-5  rounded-full bg-green-400 hover:bg-green-500 duration-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
    >
      Login
    </Link>
  );
};

export default LoginButton;
