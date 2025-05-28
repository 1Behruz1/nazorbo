import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
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
function labelToStatus(label) {
    switch (label) {
        case "New":
            return 1;
        case "Reading":
            return 2;
        case "Finished":
            return 3;
        default:
            return 1;
    }
}
export default function EditModal({ open, close, book, onUpdate }) {
    const [statusLabel, setStatusLabel] = useState(statusToLabel(book.status));
    useEffect(() => {
        setStatusLabel(statusToLabel(book.status));
    }, [book]);
    const handleSave = () => {
        const newStatus = labelToStatus(statusLabel);
        onUpdate({ status: newStatus });
    };
    if (!open)
        return null;
    return (_jsx("div", { style: {
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
        }, children: _jsxs("div", { style: {
                backgroundColor: "white",
                padding: 20,
                borderRadius: 8,
                width: 300,
            }, children: [_jsxs("h2", { children: ["Edit Status for \"", book.title, "\""] }), _jsxs("label", { children: ["Status:", _jsxs("select", { value: statusLabel, onChange: (e) => setStatusLabel(e.target.value), style: { marginLeft: 10 }, children: [_jsx("option", { value: "New", children: "New" }), _jsx("option", { value: "Reading", children: "Reading" }), _jsx("option", { value: "Finished", children: "Finished" })] })] }), _jsxs("div", { style: { marginTop: 20, display: "flex", justifyContent: "flex-end", gap: 10 }, children: [_jsx("button", { onClick: close, children: "Cancel" }), _jsx("button", { onClick: handleSave, style: {
                                backgroundColor: "#9333ea",
                                color: "white",
                                border: "none",
                                padding: "6px 12px",
                                borderRadius: 4,
                            }, children: "Save" })] })] }) }));
}
