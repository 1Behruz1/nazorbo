import { useEffect, useState } from "react";
import API from "../utils/config";
import BookCard from "./BookCard";
import CreateModal from "./CreateModal";

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

export default function Books({ searchTerm }: { searchTerm: string }) {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchBooks = async () => {
    try {
      const res = await API.get("/books");
      if (res.data && Array.isArray(res.data.data)) {
        setBooks(res.data.data);
      } else {
        console.error("Api error", res.data);
        setBooks([]);
      }
    } catch (error) {
      console.error("Books not found", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) =>
  book.title?.toLowerCase().includes(searchTerm.toLowerCase())
);


  const handleDelete = (deletedId: string) => {
    setBooks((prevBooks) => prevBooks.filter((b) => b._id !== deletedId));
  };

  const handleUpdate = () => {
    fetchBooks();
  };

  const handleCreate = (newBook: Book) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ color: "white", padding: "1.5rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
          style={{ fontWeight: "semibold", fontSize: "40px" }}
          className="text-2xl font-semibold"
        >
          You've got{" "}
          <span style={{ color: "#6200EE" }}>
            {filteredBooks.length} book{filteredBooks.length !== 1 ? "s" : ""}
          </span>
        </h1>
        <button
          onClick={() => setModalOpen(true)}
          style={{
            backgroundColor: "#6200EE",
            color: "white",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "24px",
            paddingRight: "24px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          + Create a book
        </button>
      </div>

      <p className="mt-[12px] text-[20px]">Your books today</p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          marginTop: "36px",
        }}
      >
        {filteredBooks.length === 0 && <p>No books found.</p>}

        {filteredBooks.map((book) => (
          <BookCard
            key={book._id}
            book={book}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>

      <CreateModal open={modalOpen} close={() => setModalOpen(false)} onCreate={handleCreate} />
    </div>
  );
}
