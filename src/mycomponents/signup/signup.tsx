import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSignUp } from "../../reactQuery/mutation/auth";

interface SignUpFormInputs {
  email: string;
  password: string;
}

const SignUpForm: React.FC = () => {
  const { t } = useTranslation();
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>();

  const { mutate: register, isError, error, isPending } = useSignUp();
  


  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
    register(data);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="rounded-xl border bg-card text-card-foreground shadow w-full max-w-md">
        <div className="flex flex-col space-y-1.5 p-6">
        {isPending && (
        <h1 className="m-auto text-center text-lg">Signing you up...</h1>
      )}
          <div className="tracking-tight text-2xl font-bold text-center">
            {t("signup.title")}
          </div>
          <div className="text-sm text-muted-foreground text-center">
            {t("signup.description")}
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
                {t("signup.email_label")}
              </label>
              <input
                type="email"
                id="email"
                {...formRegister("email", {
                  required: t("signup.validation.required"),
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: t("signup.validation.invalid_email_format"),
                  },
                })}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
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
                {...formRegister("password", {
                  required: t("signup.validation.required"),
                  minLength: {
                    value: 6,
                    message: t("signup.validation.min_length", { count: 6 }),
                  },
                  maxLength: {
                    value: 20,
                    message: t("signup.validation.max_length", { count: 20 }),
                  },
                })}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
            >
              {t("signup.submit_button")}
            </button>
          </form>
        </div>
        {isError && <p className="text-red-500">Sign Up failed: {String(error)}</p>}

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
