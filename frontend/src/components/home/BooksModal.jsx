import { AiOutlineClose } from "react-icons/ai"
import { PiBookOpenTextFill } from "react-icons/pi"
import { BiUserCircle } from "react-icons/bi"
import { motion, AnimatePresence } from "framer-motion"

const BooksModal = ({book, onClose}) => {
  return (
    <AnimatePresence>
      <div className="fixed bg-black/60 backdrop-blur-sm inset-0 z-50 flex justify-center items-center py-8 px-4" onClick={onClose}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-gray-900 border border-gray-700/50 rounded-2xl shadow-2xl p-8 overflow-hidden" 
          onClick={(e) => e.stopPropagation()}
        > 
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white hover:bg-gray-800 p-2 rounded-full transition-all"
          >
             <AiOutlineClose className="text-xl" />
          </button>

          <div className="flex flex-col gap-y-6">
            <span className="self-start px-3 py-1 text-xs font-semibold text-indigo-300 bg-indigo-900/40 rounded-full border border-indigo-700/50">
              {book.publishedYear}
            </span>
            
            <div className="flex items-start gap-x-4">
              <PiBookOpenTextFill className="text-4xl text-indigo-400 shrink-0 mt-1"/>
              <div>
                <h1 className="text-3xl font-bold text-gray-100 leading-tight"> {book.title}</h1>
                <p className="text-sm font-mono text-gray-500 mt-2">ID: {book._id}</p>
              </div>
            </div>

            <div className="mt-4 pt-6 border-t border-gray-800">
               <h3 className="text-lg font-semibold text-gray-300 mb-2">Description</h3>
               <p className="text-gray-400 leading-relaxed">
                 An elegant piece of literature authored by {book.author} in {book.publishedYear}. 
                 This book is a highly recommended read for anyone wanting to delve deep into the subject matter.
               </p>
            </div>

            <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-800">
              <div className="flex items-center gap-x-3">
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <BiUserCircle className="text-2xl text-purple-400"/> 
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Author</span>
                  <span className="text-gray-200 font-medium">{book.author}</span>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Price</span>
                <span className="text-xl font-bold flex items-center justify-center bg-gray-800/80 w-[4rem] text-emerald-400 rounded-lg">${book.price ? book.price : ' -'}</span>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default BooksModal
