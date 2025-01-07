import AuthGuardForLogOut from "../../mycomponents/route-guards/auth/forLogOut";
import { lazy } from "react";
import { Route } from "react-router-dom";
import { DASHBOARD_PATHS } from "./index.enum";
// import About from "../../mycomponents/about/about";
// import WritePost from "../../mycomponents/write/write";
// import Author from "../../mycomponents/author/author";
// import Profile from "../../mycomponents/profile/profile";
// import MainPage from "../../mycomponents/main/main";
import { Suspense } from "react";

const About = lazy(() => import("../../mycomponents/about/about"));
const WritePost = lazy(() => import("../../mycomponents/write/write"));
const Author = lazy(() => import("../../mycomponents/author/author"));
const Profile = lazy(() => import("../../mycomponents/profile/profile"));
const MainPage = lazy(() => import("../../mycomponents/main/main"));

export const DASHBOARD_ROUTES = [
  <Route
    path={DASHBOARD_PATHS.ABOUT}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    }
  />,
  <Route
    path={DASHBOARD_PATHS.WRITE}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <WritePost />
      </Suspense>
    }
  />,
  <Route
    path={DASHBOARD_PATHS.AUTHOR}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <Author />
      </Suspense>
    }
  />,
  <Route
    path={DASHBOARD_PATHS.PROFILE}
    element={
      <AuthGuardForLogOut>
        <Suspense fallback={<div>Loading...</div>}>
          <Profile />
        </Suspense>
      </AuthGuardForLogOut>
    }
  />,
  
  <Route index element={
    <Suspense fallback={<div>Loading...</div>}>
  <MainPage />
 </Suspense>} />,
];
