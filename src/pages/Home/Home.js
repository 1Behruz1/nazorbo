import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Header from "../../components/Header";
import Books from "../../components/Books";
const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    return (_jsxs(_Fragment, { children: [_jsx(Header, { searchTerm: searchTerm, setSearchTerm: setSearchTerm }), _jsx(Books, { searchTerm: searchTerm })] }));
};
export default Home;
