import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Authenticated = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    } else {
      setLoaded(true);
    }
  }, [user]);

  if (!loaded) return null;

  return children;
};

export default Authenticated;
