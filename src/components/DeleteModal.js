import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
export default function DeleteModal({ open, bookTitle, onClose, onConfirm }) {
    if (!open)
        return null;
    return (_jsx("div", { style: {
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
        }, children: _jsxs("div", { style: {
                backgroundColor: "white",
                borderRadius: 8,
                padding: 24,
                width: 320,
                boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                textAlign: "center",
            }, children: [_jsxs("h2", { style: { marginBottom: 16 }, children: ["Delete \"", bookTitle, "\"?"] }), _jsx("p", { children: "Are you sure you want to delete this book?" }), _jsxs("div", { style: { marginTop: 24, display: "flex", justifyContent: "space-around" }, children: [_jsx("button", { onClick: onClose, style: {
                                padding: "8px 16px",
                                borderRadius: 6,
                                border: "1px solid #ccc",
                                backgroundColor: "#eee",
                                cursor: "pointer",
                            }, children: "Cancel" }), _jsx("button", { onClick: () => {
                                onConfirm();
                                onClose();
                            }, style: {
                                padding: "8px 16px",
                                borderRadius: 6,
                                border: "none",
                                backgroundColor: "#ef4444",
                                color: "white",
                                cursor: "pointer",
                            }, children: "Delete" })] })] }) }));
}
