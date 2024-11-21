import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import {register} from "../../supabase/auth";


const SignUpForm: React.FC = () => {
  const { t } = useTranslation();
  const [registerPayload, setRegisterPayload] = useState({ 
    email: "",
    password: "",
  });

  const {mutate:handleRegister} = useMutation({
    mutationKey: ["login"],
    mutationFn: register,
  })

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { id, value } = e.target;
  //   setRegisterPayload({ ...registerPayload, [id]: value });
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isEmailField = !!registerPayload.email;
    const isPasswordField = !!registerPayload.password;
    if (isEmailField && isPasswordField){
      handleRegister(registerPayload);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="rounded-xl border bg-card text-card-foreground shadow w-full max-w-md">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="tracking-tight text-2xl font-bold text-center">
            {t("signup.title")}
          </div>
          <div className="text-sm text-muted-foreground text-center">
            {t("signup.description")}
          </div>
        </div>

        <div className="p-6 pt-0">
          <form className="space-y-4" onSubmit={handleSubmit}>
            

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {t("signup.email_label")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                required
                value={registerPayload.email}
                onChange={(e) => {
                  setRegisterPayload({
                    email: e.target.value,
                    password: registerPayload.password,
                  });
                }}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {t("signup.password_label")}
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={registerPayload.password}
                onChange={(e) => {
                  setRegisterPayload({
                    email: registerPayload.email,
                    password: e.target.value,
                  });
                }}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
            </div>

            

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
            >
              {t("signup.submit_button")}
            </button>
          </form>
        </div>

        <div className="items-center p-6 pt-0 flex justify-center">
          <p className="text-sm text-muted-foreground">
            {t("signup.already_have_account")}{" "}
            <Link to="/LoginForm" className="text-primary hover:underline">
              {t("signup.login_link")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
