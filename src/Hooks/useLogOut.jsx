import useAuthContext from "./useAuthContext";

const useLogOut = () => {
  const { dispatch } = useAuthContext();

  const logOut = () => {
    localStorage.removeItem("access-token");

    dispatch({ type: "LOGOUT" });
  };

  return { logOut };
};

export default useLogOut;
