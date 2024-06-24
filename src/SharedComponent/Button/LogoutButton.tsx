import { removeFromLocalStorage } from "../../Utils/auth.helper";
import { RiLogoutCircleLine } from "react-icons/ri";

const LogoutButton = () => {
  const handler = () => {
    removeFromLocalStorage();
    window.location.reload();
  };
  return (
    <button
      onClick={handler}
      className="align-middle gap-2 flex  items-center select-none font-sans font-bold  text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-full bg-red-500 hover:bg-red-600 duration-500 text-white shadow-md shadow-red-900/10 hover:shadow-lg hover:shadow-red-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
    >
      <RiLogoutCircleLine className=" text-lg" /> Logout
    </button>
  );
};

export default LogoutButton;
