import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import ForgotPassword from "@/pages/Auth/ForgotPassword";
import { ProtectedRoute, PublicRoute } from "@/guards/auth.guard";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import GamesPage from "@/pages/Games";
import WalletPage from "@/pages/Wallet";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/forgot-password",
    element: (
      <PublicRoute>
        <ForgotPassword />
      </PublicRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
  {
    path: "/games",
    element: <GamesPage />,
  },
  {
    path: "my-wallet",
    element: (
      <ProtectedRoute>
        <WalletPage />
      </ProtectedRoute>
    ),
  },
];

export default routes;
