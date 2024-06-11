import { removeFromLocalStorage } from "../../Utils/auth.helper";

const LogoutButton = () => {
  const handler = () => {
    removeFromLocalStorage();
    window.location.reload();
  };
  return (
    <button
      onClick={handler}
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-600 text-white shadow-md shadow-red-900/10 hover:shadow-lg hover:shadow-red-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
