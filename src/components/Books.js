import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import API from "../utils/config";
import BookCard from "./BookCard";
import CreateModal from "./CreateModal";
export default function Books({ searchTerm }) {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const fetchBooks = async () => {
        try {
            const res = await API.get("/books");
            if (res.data && Array.isArray(res.data.data)) {
                setBooks(res.data.data);
            }
            else {
                console.error("Api error", res.data);
                setBooks([]);
            }
        }
        catch (error) {
            console.error("Books not found", error);
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchBooks();
    }, []);
    const filteredBooks = books.filter((book) => book.title?.toLowerCase().includes(searchTerm.toLowerCase()));
    const handleDelete = (deletedId) => {
        setBooks((prevBooks) => prevBooks.filter((b) => b._id !== deletedId));
    };
    const handleUpdate = () => {
        fetchBooks();
    };
    const handleCreate = (newBook) => {
        setBooks((prevBooks) => [...prevBooks, newBook]);
    };
    if (loading)
        return _jsx("p", { children: "Loading..." });
    return (_jsxs("div", { style: { color: "white", padding: "1.5rem" }, children: [_jsxs("div", { style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }, children: [_jsxs("h1", { style: { fontWeight: "semibold", fontSize: "40px" }, className: "text-2xl font-semibold", children: ["You've got", " ", _jsxs("span", { style: { color: "#6200EE" }, children: [filteredBooks.length, " book", filteredBooks.length !== 1 ? "s" : ""] })] }), _jsx("button", { onClick: () => setModalOpen(true), style: {
                            backgroundColor: "#6200EE",
                            color: "white",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            paddingLeft: "24px",
                            paddingRight: "24px",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }, children: "+ Create a book" })] }), _jsx("p", { className: "mt-[12px] text-[20px]", children: "Your books today" }), _jsxs("div", { style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "24px",
                    marginTop: "36px",
                }, children: [filteredBooks.length === 0 && _jsx("p", { children: "No books found." }), filteredBooks.map((book) => (_jsx(BookCard, { book: book, onDelete: handleDelete, onUpdate: handleUpdate }, book._id)))] }), _jsx(CreateModal, { open: modalOpen, close: () => setModalOpen(false), onCreate: handleCreate })] }));
}
