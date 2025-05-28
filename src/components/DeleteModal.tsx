import React from "react";

type DeleteModalProps = {
  open: boolean;
  bookTitle: string;
  onClose: () => void;
  onConfirm: () => void;
};

export default function DeleteModal({ open, bookTitle, onClose, onConfirm }: DeleteModalProps) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: 8,
          padding: 24,
          width: 320,
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: 16 }}>Delete "{bookTitle}"?</h2>
        <p>Are you sure you want to delete this book?</p>
        <div style={{ marginTop: 24, display: "flex", justifyContent: "space-around" }}>
          <button
            onClick={onClose}
            style={{
              padding: "8px 16px",
              borderRadius: 6,
              border: "1px solid #ccc",
              backgroundColor: "#eee",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            style={{
              padding: "8px 16px",
              borderRadius: 6,
              border: "none",
              backgroundColor: "#ef4444",
              color: "white",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
