import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { motion } from 'framer-motion';

const BooksTable = ({ books }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-x-auto rounded-2xl border border-gray-700/50 bg-gray-800/20 backdrop-blur-sm shadow-xl"
    >
      <table className='w-full text-left border-collapse'>
        <thead>
          <tr className='bg-gray-800/80 text-gray-400 text-sm tracking-wider uppercase border-b border-gray-700/50'>
            <th className='p-5 font-medium'>No</th>
            <th className='p-5 font-medium'>Title</th>
            <th className='p-5 font-medium max-md:hidden'>Author</th>
            <th className='p-5 font-medium max-md:hidden'>Publish Year</th>
            <th className='p-5 font-medium max-md:hidden'>Price</th>
            <th className='p-5 font-medium text-center'>Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700/50">
          {books.map((book, index) => (
            <motion.tr 
              key={book._id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ backgroundColor: 'rgba(99, 102, 241, 0.05)' }}
              className='group transition-colors'
            >
              <td className='p-5 text-gray-500 font-mono'>{index + 1}</td>
              <td className='p-5 text-gray-100 font-medium'>{book.title}</td>
              <td className='p-5 text-gray-400 max-md:hidden'>{book.author}</td>
              <td className='p-5 max-md:hidden'>
                <span className="px-3 py-1 text-xs font-semibold text-indigo-300 bg-indigo-900/40 rounded-full border border-indigo-700/50">
                  {book.publishedYear}
                </span>
              </td>
              <td className='p-5 text-emerald-400 font-medium max-md:hidden'>
                ${book.price ? book.price : 'N/A'}
              </td>
              <td className='p-5'>
                <div className="flex justify-center items-center gap-x-4">
                  <Link 
                    to={`/books/show/${book._id}`}
                    className="p-2 rounded-lg text-blue-400 hover:bg-blue-500/20 hover:text-white transition-all shadow-sm"
                    title="View Details"
                  >
                    <BsInfoCircle className='text-xl'/>
                  </Link>
                  <Link 
                    to={`/books/edit/${book._id}`}
                    className="p-2 rounded-lg text-emerald-400 hover:bg-emerald-500/20 hover:text-white transition-all shadow-sm"
                    title="Edit Book"
                  >
                    <AiOutlineEdit className='text-xl'/>
                  </Link>
                  <Link 
                    to={`/books/delete/${book._id}`}
                    className="p-2 rounded-lg text-rose-400 hover:bg-rose-500/20 hover:text-white transition-all shadow-sm"
                    title="Delete Book"
                  >
                    <MdOutlineDelete className='text-xl'/>
                  </Link>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

export default BooksTable;