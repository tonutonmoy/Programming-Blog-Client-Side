import { isLoggedIn } from "../../Utils/auth.helper";
import LoginButton from "../Button/LoginButton";
import LogoutButton from "../Button/LogoutButton";

const LoginAndLogout = () => {
  const isLogin = isLoggedIn();

  return <div>{!isLogin ? <LoginButton /> : <LogoutButton />}</div>;
};

export default LoginAndLogout;
