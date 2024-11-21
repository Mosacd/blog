import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { login } from "../../supabase/auth";
import { useMutation } from "@tanstack/react-query";

const LoginForm: React.FC = () => {
  const { t } = useTranslation();

  const [logInPayload, setLogInPayload] = useState({ 
    email: "",
    password: "",
  });

  const {mutate:handleLogIn} = useMutation({
    mutationKey: ["register"],
    mutationFn: login,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isEmailField = !!logInPayload.email;
    const isPasswordField = !!logInPayload.password;
    if (isEmailField && isPasswordField){
      handleLogIn(logInPayload);
    }
  };

  return (
    <div className="w-fit min-h-screen bg-background flex items-center justify-center m-auto">
      <div className="rounded-xl border bg-card text-card-foreground shadow w-full max-w-md">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="tracking-tight text-2xl font-bold text-center">
            {t("signin.title")}
          </div>
          <div className="text-sm text-muted-foreground text-center">
            {t("signin.description")}
          </div>
        </div>

        <div className="p-6 pt-0">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {t("signin.email_label")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                required
                value={logInPayload.email}
                onChange={(e) => setLogInPayload({
                  email: e.target.value,
                  password: logInPayload.password,
                })}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {t("signin.password_label")}
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={logInPayload.password}
                onChange={(e) => setLogInPayload({
                  email: logInPayload.email,
                  password: e.target.value,
                })}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
            >
              {t("signin.submit_button")}
            </button>
          </form>
        </div>

        <div className="items-center p-6 pt-0 flex justify-between">
          <a href="/forgot-password" className="text-sm text-primary hover:underline">
            {t("signin.forgot_password")}
          </a>
          <p className="text-sm text-muted-foreground">
            {t("signin.no_account")}{" "}
            <Link className="text-primary hover:underline" to="/SignUpForm">
              {t("signin.signup_link")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
