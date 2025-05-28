import { useState } from "react";
import Header from "../../components/Header";
import Books from "../../components/Books";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Books searchTerm={searchTerm} />
    </>
  );
};

export default Home;
