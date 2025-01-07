import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLogIn } from "../../reactQuery/mutation/auth";

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { t } = useTranslation();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const { mutate: login, isError, error, isPending } = useLogIn();
  
 
  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    login(data);
  };

  return (
    <div className="w-fit min-h-screen bg-background flex items-center justify-center m-auto">
      <div className="rounded-xl border bg-card text-card-foreground shadow w-full max-w-md">
        <div className="flex flex-col space-y-1.5 p-6">
        {isPending && (
        <h1 className="m-auto text-center text-lg">Signing you in...</h1>
      )}
          <div className="tracking-tight text-2xl font-bold text-center">
            {t("signin.title")}
          </div>
          <div className="text-sm text-muted-foreground text-center">
            {t("signin.description")}
          </div>
        </div>
        
        <div className="p-6 pt-0">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {t("signin.email_label")}
              </label>
              <input
                formNoValidate
                type="email"
                id="email"
                placeholder="john@example.com"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                {...register("email", {
                  required: "signin.validation.required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "signin.validation.invalid_email_format",
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{t("errors.email.message")}</p>
              )}
            </div>

            {/* Password Field */}
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
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                {...register("password", {
                  required:"signin.validation.required",
                  minLength: {
                    value: 6,
                    message:"signin.validation.min_length",
                  },
                  maxLength: {
                    value: 20,
                    message:"signin.validation.max_length",
                  },
                })}
              />
              {errors.password && (
                <p className="text-sm text-red-500">{t("errors.password.message")}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
            >
              {t("signin.submit_button")}
            </button>
          </form>
        </div>
        {isError && <p className="text-red-500">Login failed: {String(error)}</p>}

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
