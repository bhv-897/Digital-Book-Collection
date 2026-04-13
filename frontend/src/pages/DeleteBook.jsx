import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlDelete = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5555/books/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to delete book");
      }
      enqueueSnackbar("Book deleted successfully", { variant: "success" });
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6 md:p-12 font-sans flex flex-col items-center">
      <div className="w-full max-w-2xl self-start">
        <BackButton />
      </div>
      
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-500 tracking-tight my-8 text-center">
        Delete Book
      </h1>
      
      {loading && <div className="mb-4"><Spinner /></div>}
      {error && <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg mb-6">{error}</div>}
      
      <div className="flex flex-col items-center bg-gray-800/40 backdrop-blur-sm border border-rose-500/30 rounded-2xl w-full max-w-xl p-8 md:p-12 shadow-[0_0_40px_rgba(244,63,94,0.1)]">
        <div className="w-20 h-20 bg-rose-500/10 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        </div>
        
        <h3 className="text-2xl text-center font-semibold text-gray-200 mb-2">Are you absolutely sure?</h3>
        <p className="text-gray-400 text-center mb-8">This action cannot be undone. This will permanently delete the book from the database.</p>
        
        <div className="flex flex-col md:flex-row justify-around w-full gap-4">
          <button
            onClick={handlDelete}
            className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl py-3 shadow-lg hover:shadow-rose-500/30 transition-all focus:ring-2 focus:ring-rose-500 focus:outline-none"
            disabled={loading}
          >
            {loading ? 'Deleting...' : 'Yes, delete it'}
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl py-3 shadow-lg transition-all focus:ring-2 focus:ring-gray-500 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
