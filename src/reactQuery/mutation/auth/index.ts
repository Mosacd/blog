import { login, logout, register } from "../../../supabase/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AUTH_MUTATION_KEYS } from "./enum";



export const useLogIn = () => {
    const navigate = useNavigate();
  
    return useMutation<void, Error, { email: string; password: string }>({
      mutationKey: [AUTH_MUTATION_KEYS.LOGIN],
      mutationFn: login,
  
      onSuccess: () => {
        navigate("/");
      },
      onError: (error: Error) => {
        console.error("Login failed:", error);
        throw error;
      },
    });
  };

  export const useSignUp = () => {
    const navigate = useNavigate();
  
    return useMutation<void, Error, { email: string; password: string }>({
      mutationKey: [AUTH_MUTATION_KEYS.REGISTER],
      mutationFn: register,
  
      onSuccess: () => {
        navigate("/SignInForm");
      },
      onError: (error: Error) => {
        console.error("Sign Up failed:", error);
        throw error;
      },
    });
  };

  export const useSignOut = () => {
    const navigate = useNavigate();
  
    return useMutation<void, Error, void>({
      mutationKey: [AUTH_MUTATION_KEYS.LOGOUT],
      mutationFn: logout,
  
      onSuccess: () => {
        navigate("/LoginForm");
      },
  
      onError: (error: Error) => {
        console.error("Logout failed:", error);
        throw error;
      },
    });
  };