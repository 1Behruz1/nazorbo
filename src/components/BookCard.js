import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import API from "../utils/config";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
function statusToLabel(status) {
    switch (status) {
        case 1:
            return "New";
        case 2:
            return "Reading";
        case 3:
            return "Finished";
        default:
            return "New";
    }
}
function statusToColor(status) {
    switch (status) {
        case 3:
            return "green";
        case 2:
            return "yellow";
        case 1:
        default:
            return "red";
    }
}
export default function BookCard({ book, onDelete, onUpdate }) {
    const [hovered, setHovered] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleDelete = async () => {
        try {
            await API.delete(`/books/${book._id}`);
            onDelete(book._id);
        }
        catch (error) {
            console.error("You can't delete this book", error);
        }
    };
    const handleUpdate = async (updatedBookData) => {
        try {
            const res = await API.patch(`/books/${book._id}`, updatedBookData);
            console.log("Saved", res.data);
            onUpdate();
            setShowEdit(false);
        }
        catch (error) {
            console.error("You can't save this book", error);
        }
    };
    return (_jsxs("div", { style: {
            position: "relative",
            width: 400,
            padding: 25,
            paddingTop: 40,
            color: "black",
            backgroundColor: "white",
            borderRadius: 12,
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
        }, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), children: [hovered && (_jsxs("div", { style: {
                    position: "absolute",
                    top: 8,
                    right: 8,
                    display: "flex",
                    gap: 8,
                }, children: [_jsx("button", { style: {
                            backgroundColor: "#ef4444",
                            color: "white",
                            padding: 6,
                            borderRadius: 6,
                            border: "none",
                            cursor: "pointer",
                        }, onClick: () => setShowDeleteModal(true), children: _jsx("img", { src: "./trash-01.svg", alt: "delete" }) }), _jsx("button", { style: {
                            backgroundColor: "#9333ea",
                            color: "white",
                            padding: 6,
                            borderRadius: 6,
                            border: "none",
                            cursor: "pointer",
                        }, onClick: () => setShowEdit(true), children: _jsx("img", { src: "./edit-04.svg", alt: "edit" }) })] })), _jsx("h3", { style: { fontSize: "1.125rem", fontWeight: 600, marginBottom: 4 }, children: book.title }), _jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: 4 }, children: [_jsx("p", { children: "Cover:" }), _jsx("p", { style: { color: "#01a4ff" }, children: book.cover })] }), _jsxs("p", { style: { marginTop: 4 }, children: ["Pages: ", book.pages] }), _jsxs("p", { style: { marginTop: 4 }, children: ["Published: ", book.published] }), _jsxs("p", { style: { marginTop: 4 }, children: ["Isbn: ", book.isbn] }), _jsxs("div", { style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 8,
                }, children: [_jsxs("p", { style: { fontSize: "0.875rem" }, children: [book.author, " ", book.published] }), _jsx("div", { style: {
                            fontWeight: "bold",
                            fontSize: "1rem",
                            textAlign: "center",
                            borderRadius: 8,
                            color: "white",
                            backgroundColor: statusToColor(book.status),
                            padding: "2px 12px",
                        }, children: statusToLabel(book.status) })] }), showEdit && (_jsx(EditModal, { open: showEdit, close: () => setShowEdit(false), book: { ...book, id: book._id }, onUpdate: handleUpdate })), _jsx(DeleteModal, { open: showDeleteModal, bookTitle: book.title, onClose: () => setShowDeleteModal(false), onConfirm: handleDelete })] }));
}
