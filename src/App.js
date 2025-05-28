import { jsx as _jsx } from "react/jsx-runtime";
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
            element: token ? _jsx(Home, {}) : _jsx(Register, {}),
        },
        {
            path: "/register",
            element: _jsx(Register, {}),
        },
        {
            path: "/login",
            element: _jsx(Login, {}),
        },
        {
            path: "/*",
            element: _jsx(NotFound, {}),
        },
    ]);
    return _jsx(RouterProvider, { router: router });
}
export default App;
