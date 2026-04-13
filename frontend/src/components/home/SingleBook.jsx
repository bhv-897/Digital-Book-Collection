import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { PiBookOpenTextFill } from "react-icons/pi";
import { motion } from "framer-motion";
import BooksModal from "./BooksModal";

const SingleBook = ({ book, index = 0 }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col justify-between h-[280px] bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/10 transition-all overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none transition-all group-hover:bg-indigo-500/20" />
      
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-indigo-300 bg-indigo-900/40 rounded-full border border-indigo-700/50">
            {book.publishedYear}
          </span>
          <p className="text-xs text-gray-500 font-mono" title={`ID: ${book._id}`}>
            {book._id.slice(-6)}
          </p>
        </div>

        <div className="flex items-start gap-x-3 mb-3">
          <PiBookOpenTextFill className="text-indigo-400 text-2xl shrink-0 mt-1" />
          <h2 className="text-xl font-bold text-gray-100 leading-tight line-clamp-2">
            {book.title}
          </h2>
        </div>

        <div className="flex items-center gap-x-3">
          <BiUserCircle className="text-purple-400 text-xl shrink-0" />
          <h3 className="text-md text-gray-400 font-medium truncate">
            {book.author}
          </h3>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-700/50">
        <button
          onClick={() => setShowModal(true)}
          className="p-2 rounded-full text-indigo-400 hover:text-white hover:bg-indigo-500/20 transition-colors"
          title="Quick View"
        >
          <BiShow className="text-2xl" />
        </button>
        <Link 
          to={`/books/show/${book._id}`}
          className="p-2 rounded-full text-blue-400 hover:text-white hover:bg-blue-500/20 transition-colors"
          title="Details"
        >
          <BsInfoCircle className="text-xl" />
        </Link>
        <Link 
          to={`/books/edit/${book._id}`}
          className="p-2 rounded-full text-emerald-400 hover:text-white hover:bg-emerald-500/20 transition-colors"
          title="Edit"
        >
          <AiOutlineEdit className="text-2xl" />
        </Link>
        <Link 
          to={`/books/delete/${book._id}`}
          className="p-2 rounded-full text-rose-400 hover:text-white hover:bg-rose-500/20 transition-colors"
          title="Delete"
        >
          <MdOutlineDelete className="text-2xl" />
        </Link>
      </div>

      {showModal && <BooksModal book={book} onClose={() => setShowModal(false)} />}
    </motion.div>
  );
};

export default SingleBook;
