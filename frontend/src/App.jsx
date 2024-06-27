import "./App.css";
import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AppLayout from "./AppLayout";
import Lottie from "lottie-react";
import { loading } from "./animation";
import Login from "./page/Login";
import Regester from "./page/Regester";

const MainContent = lazy(() => import("./components/MainContent"));
const Profile = lazy(() => import("./page/Profile"));

const Weather = lazy(() => import("./page/Weather"));
const Marketplace = lazy(() => import("./page/marketplace"));
const Groups = lazy(() => import("./page/Groups"));
const Friends = lazy(() => import("./page/Friends"));
const Movie = lazy(() => import("./page/Movie"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: (
          <Suspense
            fallback={
              <div className="fixed  z-50 top-0 right-0 bottom-0 left-0 w-full h-full flex justify-center items-center">
                <Lottie
                  style={{ width: "14rem", height: "16rem" }}
                  animationData={loading}
                  loop={true}
                />
              </div>
            }
          >
            <MainContent />
          </Suspense>
        ),
      },
      {
        path: "/profile/:id",
        element: (
          <Suspense
            fallback={
              <div className="fixed  z-50 top-0 right-0 bottom-0 left-0 w-full h-full flex justify-center items-center">
                <Lottie
                  style={{ width: "14rem", height: "16rem" }}
                  animationData={loading}
                  loop={true}
                />
              </div>
            }
          >
            <Profile />
          </Suspense>
        ),
      },



      {
        path: "/Weather",
        element: (
          <Suspense
            fallback={
              <div className="fixed  z-50 top-0 right-0 bottom-0 left-0 w-full h-full flex justify-center items-center">
                <Lottie
                  style={{ width: "14rem", height: "16rem" }}
                  animationData={loading}
                  loop={true}
                />
              </div>
            }
          >
            <Weather />
          </Suspense>
        ),
      },
      {
        path: "/marketplace",
        element: (
          <Suspense
            fallback={
              <div className="fixed  z-50 top-0 right-0 bottom-0 left-0 w-full h-full flex justify-center items-center">
                <Lottie
                  style={{ width: "14rem", height: "16rem" }}
                  animationData={loading}
                  loop={true}
                />
              </div>
            }
          >
            <Marketplace />
          </Suspense>
        ),
      },
      {
        path: "/groups",
        element: (
          <Suspense
            fallback={
              <div className="fixed  z-50 top-0 right-0 bottom-0 left-0 w-full h-full flex justify-center items-center">
                <Lottie
                  style={{ width: "14rem", height: "16rem" }}
                  animationData={loading}
                  loop={true}
                />
              </div>
            }
          >
            <Groups />
          </Suspense>
        ),
      },
      {
        path: "/Friends",
        element: (
          <Suspense
            fallback={
              <div className="fixed  z-50 top-0 right-0 bottom-0 left-0 w-full h-full flex justify-center items-center">
                <Lottie
                  style={{ width: "14rem", height: "16rem" }}
                  animationData={loading}
                  loop={true}
                />
              </div>
            }
          >
            <Friends />
          </Suspense>
        ),
      },
      {
        path: "/Movie",
        element: (
          <Suspense
            fallback={
              <div className="fixed  z-50 top-0 right-0 bottom-0 left-0 w-full h-full flex justify-center items-center">
                <Lottie
                  style={{ width: "14rem", height: "16rem" }}
                  animationData={loading}
                  loop={true}
                />
              </div>
            }
          >
            <Movie />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/Login",
    element: <Login />,
 
  },
  {
    path: "/regster",
    element: <Regester />,
 
  },
]);

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
