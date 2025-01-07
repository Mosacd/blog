import AuthGuardLogIn from "../../mycomponents/route-guards/auth/forLogIn"
import { lazy } from "react";
import { Route } from "react-router-dom";
import { AUTH_PATHS } from "./index.enum";
// import LoginForm from "../../mycomponents/signin/singin";
// import SignUpForm from "../../mycomponents/signup/signup";
import { Suspense } from "react";

const LoginForm = lazy(() => import("../../mycomponents/signin/singin"));
const SignUpForm = lazy(() => import("../../mycomponents/signup/signup"));

export const AUTH_ROUTES = [
  <Route
    path={AUTH_PATHS.SIGNIN}
    element={
      <AuthGuardLogIn>
        <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
        </Suspense>
      </AuthGuardLogIn>
    }
  />,
  <Route
    path={AUTH_PATHS.SIGNUP}
    element={
      <AuthGuardLogIn>
         <Suspense fallback={<div>Loading...</div>}>
        <SignUpForm />
        </Suspense>
      </AuthGuardLogIn>
    }
  />,
];
