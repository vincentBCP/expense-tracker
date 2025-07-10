import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const login = (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          email,
          password,
          token: (Math.random() + 1).toString(36).substring(12),
        });
      }, 1000);
    }).then((user) => setUser(user));
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
