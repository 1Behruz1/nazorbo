import { useState } from "react";
import API from "../utils/config";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

type Book = {
  _id: string;
  title: string;
  author: string;
  cover?: string;
  pages?: number;
  published?: string;
  isbn?: string;
  status?: number;
};

type BookCardProps = {
  book: Book;
  onDelete: (id: string) => void;
  onUpdate: () => void;
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

function statusToColor(status?: number) {
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

export default function BookCard({ book, onDelete, onUpdate }: BookCardProps) {
  const [hovered, setHovered] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = async () => {
    try {
      await API.delete(`/books/${book._id}`);
      onDelete(book._id);
    } catch (error) {
      console.error("You can't delete this book", error);
    }
  };

  const handleUpdate = async (updatedBookData: Partial<Book>) => {
    try {
      const res = await API.patch(`/books/${book._id}`, updatedBookData);
      console.log("Saved", res.data);
      onUpdate();
      setShowEdit(false);
    } catch (error) {
      console.error("You can't save this book", error);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: 400,
        padding: 25,
        paddingTop: 40,
        color: "black",
        backgroundColor: "white",
        borderRadius: 12,
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            display: "flex",
            gap: 8,
          }}
        >
          <button
            style={{
              backgroundColor: "#ef4444",
              color: "white",
              padding: 6,
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setShowDeleteModal(true)}
          >
            <img src="./trash-01.svg" alt="delete" />
          </button>

          <button
            style={{
              backgroundColor: "#9333ea",
              color: "white",
              padding: 6,
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setShowEdit(true)}
          >
            <img src="./edit-04.svg" alt="edit" />
          </button>
        </div>
      )}

      <h3 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: 4 }}>
        {book.title}
      </h3>

      <div
        style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}
      >
        <p>Cover:</p>
        <p style={{ color: "#01a4ff" }}>{book.cover}</p>
      </div>

      <p style={{ marginTop: 4 }}>Pages: {book.pages}</p>
      <p style={{ marginTop: 4 }}>Published: {book.published}</p>
      <p style={{ marginTop: 4 }}>Isbn: {book.isbn}</p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <p style={{ fontSize: "0.875rem" }}>
          {book.author} {book.published}
        </p>

        <div
          style={{
            fontWeight: "bold",
            fontSize: "1rem",
            textAlign: "center",
            borderRadius: 8,
            color: "white",
            backgroundColor: statusToColor(book.status),
            padding: "2px 12px",
          }}
        >
          {statusToLabel(book.status)}
        </div>
      </div>

      {showEdit && (
        <EditModal
          open={showEdit}
          close={() => setShowEdit(false)}
          book={book}
          onUpdate={handleUpdate}
        />
      )}

      <DeleteModal
        open={showDeleteModal}
        bookTitle={book.title}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
