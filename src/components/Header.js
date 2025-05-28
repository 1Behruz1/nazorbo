import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const Header = ({ searchTerm, setSearchTerm }) => {
    return (_jsx("header", { children: _jsx("div", { style: {
                maxWidth: "1280px",
                margin: "0 auto",
                paddingLeft: "1rem",
                paddingRight: "1rem",
            }, children: _jsxs("div", { style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                }, children: [_jsxs("div", { style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "24px",
                        }, children: [_jsx(Link, { to: "/", style: { display: "inline-block" }, children: _jsx("img", { width: 150, height: 36, src: "/logo.svg", alt: "logo" }) }), _jsxs("div", { style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                }, children: [_jsx("label", { htmlFor: "search", children: _jsx("img", { src: "/search.svg", alt: "Search" }) }), _jsx("input", { id: "search", type: "search", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), placeholder: "Search for any training you want", style: {
                                            width: "300px",
                                            height: "48px",
                                            padding: "0.5rem 0.75rem",
                                            backgroundColor: "transparent",
                                            border: "none",
                                            outline: "none",
                                            color: "white",
                                            fontSize: "1rem",
                                        }, onFocus: (e) => {
                                            e.target.style.outline = "2px solid #7c3aed";
                                        }, onBlur: (e) => {
                                            e.target.style.outline = "none";
                                        } })] })] }), _jsxs("div", { style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "1.5rem",
                        }, children: [_jsx("img", { width: 24, height: 24, src: "/notification.svg", alt: "Notification" }), _jsx("img", { width: 32, height: 32, src: "/user-image.png", alt: "User" })] })] }) }) }));
};
export default Header;
