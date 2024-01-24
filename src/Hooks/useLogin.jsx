import { useState } from "react";
import useAuthContext from "./useAuthContext";

const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async ({ email, password }) => {
    setLoading(true);
    setError(null);

    const response = await fetch(
      "https://house-hunter-server-omega-ten.vercel.app/api/v1/auth/sign-in",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(data.error);
    }

    if (response.ok) {
      localStorage.setItem("access-token", `Bearer ${data.token}`);
    }

    dispatch({ type: "LOGIN", payload: data.user });

    setLoading(false);
  };

  return { login, loading, error };
};

export default useLogin;
