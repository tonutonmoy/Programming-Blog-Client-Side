/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../Utils/auth.helper";
import Loading from "../SharedComponent/Loading/Loading";

const PrivateRoute = ({ children }: any) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    setTimeout(()=>{
      if (!isLoggedIn()) {
        navigate("/login");
      } else {
        setLoading(false);
      }
    },3000)
    
  }, [navigate]);

  if (loading) {
    return <Loading/>; // Or any other loading indicator/component
  }

  return children;
};

export default PrivateRoute;
