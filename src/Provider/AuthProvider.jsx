/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const AuthContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  console.log("auth state: ", state);

  return (
    <>
      <AuthContext.Provider value={{ ...state, dispatch }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
