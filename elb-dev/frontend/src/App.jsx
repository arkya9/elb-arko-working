import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import * as Elb from "./pages";
import { store } from "./store";
import Landing from "./pages/website/Landing";

// Actions ------
import { action as loginAction } from "./components/website/Login";
import { action as registerAction } from "./components/website/Signup";
import { action as forgotPasswordAction } from "./pages/admin/auth/ForgotPassword";

// Loaders ------
import { loader as layoutLoader } from "./pages/admin/Layout";
import { loader as adminLoader } from "./pages/admin/LayoutAdmin";
import Login from "./components/website/Login";
import Signup from "./components/website/Signup";
import { useEffect, useState } from "react";
import { ThemeProvider } from "../contexts/theme";
import Dashboard from "./components/website/seller/Dashboard";
import Innerlayout from "./pages/website/Innerlayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Website routes */}
      <Route path="/" element={<Elb.LayoutWebsite />}>
        <Route index element={<Landing />} />
        <Route path="about" element={<Elb.WebsiteAbout />} />
        <Route
          path="sign-in"
          element={<Login />}
          action={loginAction}
          errorElement={<Elb.Error />}
        />
        <Route
          path="sign-up"
          element={<Signup />}
          action={registerAction}
          errorElement={<Elb.Error />}
        />
        <Route
          path="seller-dashboard"
          element={<Dashboard />}
          errorElement={<Elb.Error />}
        />
      </Route>
      {/* Admin routes */}
      <Route
        path="sign-in-dev"
        element={<Elb.Login />}
        action={loginAction}
        errorElement={<Elb.Error />}
      />
      <Route
        path="forgot-password"
        element={<Elb.ForgotPassword />}
        action={forgotPasswordAction}
        errorElement={<Elb.Error />}
      />
      <Route
        path="reset-password/:email/:token"
        element={<Elb.ResetPassword />}
        errorElement={<Elb.Error />}
      />
      <Route
        path="/"
        element={<Elb.Layout />}
        loader={layoutLoader(store)}
        errorElement={<Elb.Error />}
      >
        <Route
          path="admin"
          element={<Elb.LayoutAdmin />}
          loader={adminLoader(store)}
        >
          <Route path="dashboard" element={<Elb.AdminDashboard />} />
          <Route path="users" element={<Elb.UserList />} />
          <Route path="users/:uuid" element={<Elb.UserView />} />
          <Route path="masters">
            <Route path="categories" element={<Elb.Categories />} />
            <Route path="brands" element={<Elb.Brands />} />
            <Route path="models" element={<Elb.BrandModels />} />
            <Route path="locations" element={<Elb.Locations />} />
            <Route path="form-fields" element={<Elb.FormFields />} />
          </Route>
        </Route>
        <Route path=":slug" element={<Elb.LayoutUser />}>
          <Route path="dashboard" element={<Elb.UserDashboard />} />
        </Route>
        <Route path="change-password" element={<Elb.ChangePassword />} />
        <Route path="profile" element={<Elb.Profile />} />
        <Route path="forbidden" element={<Elb.Forbidden />} />
      </Route>
      <Route path="seller-dashboard" element={<Innerlayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </>
  )
);

function App() {
  const [ThemeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(ThemeMode);
  }, [ThemeMode]);

  return (
    <ThemeProvider value={{ ThemeMode, darkTheme, lightTheme }}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
export default App;
