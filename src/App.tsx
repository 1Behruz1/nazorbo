import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import "./App.css";
import Home from "./pages/Home/Home";
import NotFound from "./components/NotFound";

function App() {
  const token = localStorage.getItem("token");

  const router = createBrowserRouter([
    {
      path: "/",
      element: token ? <Home /> : <Register />, 
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
