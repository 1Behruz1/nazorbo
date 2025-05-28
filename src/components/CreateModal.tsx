import { useState } from "react";
import API from "../utils/config";

type Book = {
  _id: string;
  title: string;
  author: string;
  cover?: string;
  pages?: number;
  published?: string;
  isbn?: string;
  genre?: string;
};

interface CreateModalProps {
  open: boolean;
  close: () => void;
  onCreate: (newBook: Book) => void;
}

export default function CreateModal({ open, close, onCreate }: CreateModalProps) {
  const [isbn, setIsbn] = useState("");


const handleSubmit = async () => {
    if (!isbn.trim()) {
      alert("Please enter an ISBN");
      return;
    }
    console.log("Submitting ISBN:", isbn); 
  
    try {
      const res = await API.post("/books", { isbn });
      console.log("Create response:", res.data);
      const createdBook = res.data;
      onCreate(createdBook);
      setIsbn("");
      close();
    } catch (error: any) {
      console.error("Error creating book:", error.response?.data || error.message);
      alert("Failed to create book: " + (error.response?.data?.message || error.message));
    } finally {
    }
  };
  

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex", justifyContent: "center", alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          width: "400px",
          padding: "20px",
          position: "relative",
        }}
      >
        <h2 style={{ marginBottom: "16px", color: "black" }}>Create Book</h2>

        <button
          onClick={close}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            fontSize: "18px",
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
          aria-label="Close modal"
        >
          ×
        </button>

        <label htmlFor="isbnInput" style={{ display: "block", marginBottom: "8px", color: "black" }}>
          ISBN
        </label>
        <input
          id="isbnInput"
          type="text"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          placeholder="Enter ISBN from https://www.topshelfcomix.com/catalog/isbn-list"
        />

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
          <button
            onClick={close}
            style={{
              padding: "8px 16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            style={{
              padding: "8px 16px",
              borderRadius: "4px",
              border: "none",
              backgroundColor: "#6200EE",
              color: "white",
              cursor: "pointer",
            }}
          >
            { "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}
