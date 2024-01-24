import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw Error("Auth context must be used within AuthContextProvider ");

  return context;
};

export default useAuthContext;
