import { useState, useEffect } from "react";
interface Book {
    id: number;
    title: string;
    author?: string;
    status?: number;
  }
  
type EditModalProps = {
  open: boolean;
  close: () => void;
  book: Book;
  onUpdate: (updatedBookData: Partial<Book>) => void;
};

function statusToLabel(status?: number) {
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
  
  function labelToStatus(label: string) {
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
  

export default function EditModal({ open, close, book, onUpdate }: EditModalProps) {
  const [statusLabel, setStatusLabel] = useState(statusToLabel(book.status));

  useEffect(() => {
    setStatusLabel(statusToLabel(book.status));
  }, [book]);

  const handleSave = () => {
    const newStatus = labelToStatus(statusLabel);
    onUpdate({ status: newStatus });
  };

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 8,
          width: 300,
        }}
      >
        <h2>Edit Status for "{book.title}"</h2>

        <label>
          Status:
          <select
            value={statusLabel}
            onChange={(e) => setStatusLabel(e.target.value)}
            style={{ marginLeft: 10 }}
          >
            <option value="New">New</option>
            <option value="Reading">Reading</option>
            <option value="Finished">Finished</option>
          </select>
        </label>

        <div style={{ marginTop: 20, display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <button onClick={close}>Cancel</button>
          <button
            onClick={handleSave}
            style={{
              backgroundColor: "#9333ea",
              color: "white",
              border: "none",
              padding: "6px 12px",
              borderRadius: 4,
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
