import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async () => {
        const { username, email, password, confirmPassword } = formData;
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        try {
            const response = await axios.post("https://lavina.onrender.com/signup", {
                name: username,
                email: email,
                key: password,
                secret: "my-secret",
            });
            console.log("Server response:", response.data);
            if (response.data?.data?.key && response.data?.data?.secret) {
                localStorage.setItem("key", response.data.data.key);
                localStorage.setItem("secret", response.data.data.secret);
                localStorage.setItem("token", JSON.stringify(response.data));
                console.log("Data saved to localStorage");
            }
            else {
                console.warn("Expected data not found in response");
            }
            navigate("/");
            window.location.reload();
        }
        catch (e) {
            console.error("Error during registration:", e.response?.data || e.message);
            setError("An error occurred during registration.");
        }
    };
    return (_jsx("div", { style: {
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
        }, children: _jsx("div", { style: { width: "100%", maxWidth: "28rem" }, children: _jsxs("div", { style: {
                    backgroundColor: "white",
                    borderRadius: "0.5rem",
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
                    padding: "2rem",
                }, children: [_jsx("h2", { style: {
                            fontSize: "1.5rem",
                            fontWeight: "600",
                            color: "#111827",
                            textAlign: "center",
                            marginBottom: "2rem",
                        }, children: "Sign up" }), _jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "1.5rem" }, children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "username", style: {
                                            display: "block",
                                            fontSize: "0.875rem",
                                            fontWeight: "500",
                                            color: "#4b5563",
                                            marginBottom: "0.5rem",
                                        }, children: "Username" }), _jsx("input", { type: "text", id: "username", name: "username", value: formData.username, onChange: handleChange, placeholder: "Enter your username", style: {
                                            width: "100%",
                                            padding: "0.5rem 0.75rem",
                                            border: "1px solid #d1d5db",
                                            borderRadius: "0.375rem",
                                            boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                                            outline: "none",
                                        }, onFocus: (e) => {
                                            e.target.style.borderColor = "#3b82f6";
                                            e.target.style.boxShadow = "0 0 0 2px #3b82f6";
                                        }, onBlur: (e) => {
                                            e.target.style.borderColor = "#d1d5db";
                                            e.target.style.boxShadow = "0 1px 2px rgba(0,0,0,0.05)";
                                        } })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", style: {
                                            display: "block",
                                            fontSize: "0.875rem",
                                            fontWeight: "500",
                                            color: "#4b5563",
                                            marginBottom: "0.5rem",
                                        }, children: "Email" }), _jsx("input", { type: "text", id: "email", name: "email", value: formData.email, onChange: handleChange, placeholder: "Enter your email", style: {
                                            width: "100%",
                                            padding: "0.5rem 0.75rem",
                                            border: "1px solid #d1d5db",
                                            borderRadius: "0.375rem",
                                            boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                                            outline: "none",
                                        }, onFocus: (e) => {
                                            e.target.style.borderColor = "#3b82f6";
                                            e.target.style.boxShadow = "0 0 0 2px #3b82f6";
                                        }, onBlur: (e) => {
                                            e.target.style.borderColor = "#d1d5db";
                                            e.target.style.boxShadow = "0 1px 2px rgba(0,0,0,0.05)";
                                        } })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "password", style: {
                                            display: "block",
                                            fontSize: "0.875rem",
                                            fontWeight: "500",
                                            color: "#4b5563",
                                            marginBottom: "0.5rem",
                                        }, children: "Password" }), _jsx("input", { type: "password", id: "password", name: "password", value: formData.password, onChange: handleChange, placeholder: "Enter your password", style: {
                                            width: "100%",
                                            padding: "0.5rem 0.75rem",
                                            border: "1px solid #d1d5db",
                                            borderRadius: "0.375rem",
                                            boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                                            outline: "none",
                                        }, onFocus: (e) => {
                                            e.target.style.borderColor = "#3b82f6";
                                            e.target.style.boxShadow = "0 0 0 2px #3b82f6";
                                        }, onBlur: (e) => {
                                            e.target.style.borderColor = "#d1d5db";
                                            e.target.style.boxShadow = "0 1px 2px rgba(0,0,0,0.05)";
                                        } })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "confirmPassword", style: {
                                            display: "block",
                                            fontSize: "0.875rem",
                                            fontWeight: "500",
                                            color: "#4b5563",
                                            marginBottom: "0.5rem",
                                        }, children: "Confirm password" }), _jsx("input", { type: "password", id: "confirmPassword", name: "confirmPassword", value: formData.confirmPassword, onChange: handleChange, placeholder: "Confirm your password", style: {
                                            width: "100%",
                                            padding: "0.5rem 0.75rem",
                                            border: "1px solid #d1d5db",
                                            borderRadius: "0.375rem",
                                            boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                                            outline: "none",
                                        }, onFocus: (e) => {
                                            e.target.style.borderColor = "#3b82f6";
                                            e.target.style.boxShadow = "0 0 0 2px #3b82f6";
                                        }, onBlur: (e) => {
                                            e.target.style.borderColor = "#d1d5db";
                                            e.target.style.boxShadow = "0 1px 2px rgba(0,0,0,0.05)";
                                        } })] }), error && (_jsx("div", { style: {
                                    color: "#ef4444",
                                    fontSize: "0.875rem",
                                    marginTop: "0.5rem",
                                }, children: _jsx("h2", { children: error }) })), _jsx("button", { type: "button", onClick: handleSubmit, style: {
                                    width: "100%",
                                    backgroundColor: "#7c3aed",
                                    color: "white",
                                    padding: "0.5rem 1rem",
                                    borderRadius: "0.375rem",
                                    fontWeight: "500",
                                    cursor: "pointer",
                                    border: "none",
                                    transition: "background-color 0.2s ease",
                                }, onMouseEnter: (e) => (e.currentTarget.style.backgroundColor = "#6d28d9"), onMouseLeave: (e) => (e.currentTarget.style.backgroundColor = "#7c3aed"), onFocus: (e) => {
                                    e.currentTarget.style.outline = "none";
                                    e.currentTarget.style.boxShadow = "0 0 0 2px #8b5cf6";
                                }, onBlur: (e) => {
                                    e.currentTarget.style.boxShadow = "none";
                                }, children: "Submit" })] }), _jsx("div", { style: {
                            marginTop: "1.5rem",
                            textAlign: "center",
                        }, children: _jsxs("p", { style: { fontSize: "0.875rem", color: "#6b7280" }, children: ["Already signed up?", " ", _jsx(Link, { to: "/login", style: {
                                        color: "#7c3aed",
                                        fontWeight: "500",
                                        textDecoration: "none",
                                    }, onMouseEnter: (e) => (e.currentTarget.style.color = "#6d28d9"), onMouseLeave: (e) => (e.currentTarget.style.color = "#7c3aed"), children: "Go to sign in." })] }) })] }) }) }));
}
