import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      const res = await fetch("http://localhost:5555/books");
      const data = await res.json();
      setBooks(data);
      setLoading(false);
    };
    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6 md:p-12 font-sans selection:bg-indigo-500 selection:text-white">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col md:flex-row justify-between items-center mb-10 pb-6 border-b border-gray-800">
          <div className="mb-4 md:mb-0">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 tracking-tight">
              Book Collection
            </h1>
            <p className="text-gray-400 mt-1 text-sm tracking-wide">Manage your elegant digital library</p>
          </div>

          <div className="flex items-center gap-x-6">
            <div className="flex p-1 bg-gray-800/50 backdrop-blur-md rounded-full shadow-inner border border-gray-700/50">
              <button
                onClick={() => setShowType("table")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out ${
                  showType === "table"
                    ? "bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-700/50"
                }`}
              >
                Table View
              </button>
              <button
                onClick={() => setShowType("card")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out ${
                  showType === "card"
                    ? "bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-700/50"
                }`}
              >
                Grid View
              </button>
            </div>

            <Link 
              to={"/books/create"}
              className="group flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1"
            >
              <MdOutlineAddBox className="text-2xl group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </header>

        <main className="relative min-h-[400px] flex flex-col">
          {loading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Spinner />
            </div>
          ) : showType === 'table' ? (
            <BooksTable books={books} />
          ) : (
            <BooksCard books={books} />
          )}
        </main>
      </div>
    </div>
  );
};

export default Home;
