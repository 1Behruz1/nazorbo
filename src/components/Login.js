import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState("");
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async () => {
        setError("");
        const { username, password } = formData;
        if (!username || !password) {
            setError("Please fill in all fields.");
            return;
        }
        try {
            const response = await axios.post("https://lavina.onrender.com/signup", {
                name: username,
                key: password,
                secret: "my-secret",
            });
            localStorage.setItem("token", JSON.stringify(response.data));
            navigate("/");
            window.location.reload();
        }
        catch (e) {
            console.log(e);
            setError("Login failed.");
        }
    };
    return (_jsx("div", { style: {
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
        }, children: _jsx("div", { style: { width: "100%", maxWidth: "28rem" }, children: _jsxs("div", { style: {
                    backgroundColor: "#ffffff",
                    borderRadius: "0.5rem",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    padding: "2rem",
                }, children: [_jsx("h2", { style: {
                            fontSize: "1.5rem",
                            fontWeight: "600",
                            color: "#111827",
                            textAlign: "center",
                            marginBottom: "2rem",
                        }, children: "Sign in" }), _jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "1.5rem" }, children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "username", style: {
                                            display: "block",
                                            fontSize: "0.875rem",
                                            fontWeight: "500",
                                            color: "#374151",
                                            marginBottom: "0.5rem",
                                        }, children: "Username" }), _jsx("input", { type: "text", id: "username", name: "username", value: formData.username, onChange: handleChange, placeholder: "Enter your username", style: {
                                            width: "100%",
                                            padding: "0.5rem 0.75rem",
                                            border: "1px solid #D1D5DB",
                                            borderRadius: "0.375rem",
                                            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                                            outline: "none",
                                        }, onFocus: (e) => {
                                            e.target.style.borderColor = "#3b82f6";
                                            e.target.style.boxShadow = "0 0 0 2px #3b82f6";
                                        }, onBlur: (e) => {
                                            e.target.style.borderColor = "#D1D5DB";
                                            e.target.style.boxShadow = "none";
                                        } })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "password", style: {
                                            display: "block",
                                            fontSize: "0.875rem",
                                            fontWeight: "500",
                                            color: "#374151",
                                            marginBottom: "0.5rem",
                                        }, children: "Password" }), _jsx("input", { type: "password", id: "password", name: "password", value: formData.password, onChange: handleChange, placeholder: "Enter your password", style: {
                                            width: "100%",
                                            padding: "0.5rem 0.75rem",
                                            border: "1px solid #D1D5DB",
                                            borderRadius: "0.375rem",
                                            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                                            outline: "none",
                                        }, onFocus: (e) => {
                                            e.target.style.borderColor = "#3b82f6";
                                            e.target.style.boxShadow = "0 0 0 2px #3b82f6";
                                        }, onBlur: (e) => {
                                            e.target.style.borderColor = "#D1D5DB";
                                            e.target.style.boxShadow = "none";
                                        } })] }), error && (_jsx("div", { style: {
                                    color: "#dc2626",
                                    fontSize: "0.875rem",
                                    textAlign: "center",
                                }, children: error })), _jsx("button", { type: "button", onClick: handleSubmit, style: {
                                    width: "100%",
                                    backgroundColor: "#7c3aed",
                                    color: "#ffffff",
                                    padding: "0.5rem 1rem",
                                    borderRadius: "0.375rem",
                                    fontWeight: "500",
                                    fontSize: "1rem",
                                    transition: "background-color 0.2s ease",
                                    cursor: "pointer",
                                }, onMouseEnter: (e) => (e.currentTarget.style.backgroundColor = "#6d28d9"), onMouseLeave: (e) => (e.currentTarget.style.backgroundColor = "#7c3aed"), onFocus: (e) => {
                                    e.currentTarget.style.outline = "none";
                                    e.currentTarget.style.boxShadow = "0 0 0 2px #8b5cf6";
                                }, onBlur: (e) => {
                                    e.currentTarget.style.boxShadow = "none";
                                }, children: "Submit" })] }), _jsx("div", { style: { marginTop: "1.5rem", textAlign: "center" }, children: _jsxs("p", { style: { fontSize: "0.875rem", color: "#4b5563" }, children: ["Don\u2019t have an account?", " ", _jsx(Link, { to: "/", style: {
                                        color: "#7c3aed",
                                        fontWeight: "500",
                                        textDecoration: "none",
                                    }, onMouseEnter: (e) => (e.currentTarget.style.color = "#8b5cf6"), onMouseLeave: (e) => (e.currentTarget.style.color = "#7c3aed"), children: "Go to sign up." })] }) })] }) }) }));
}
