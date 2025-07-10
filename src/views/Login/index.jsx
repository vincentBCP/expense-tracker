import { useContext, useEffect, useState } from "react";

import "./styles.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const { user, login } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (loading) return;

    setLoading(true);

    login(email, password)
      .then(() => navigate("/"))
      .catch((err) => {});
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={email}
        required
        onChange={(ev) => setEmail(ev.target.value)}
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={password}
        required
        onChange={(ev) => setPassword(ev.target.value)}
      />

      <button type="submit">{loading ? "LOGGING IN..." : "LOGIN"}</button>
    </form>
  );
};

export default Login;
