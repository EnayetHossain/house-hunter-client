import { useState } from "react";
import useAuthContext from "./useAuthContext";

const useSignUp = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signUp = async ({
    fullName,
    email,
    password,
    confirmPassword,
    phoneNumber,
    role,
  }) => {
    setLoading(true);
    setError(null);

    const response = await fetch(
      "https://house-hunter-server-omega-ten.vercel.app/api/v1/auth/sign-up",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phoneNumber,
          role,
          password,
          confirmPassword,
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

  return { signUp, loading, error };
};

export default useSignUp;
