import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useParams } from 'react-router-dom'
import { PiBookOpenTextFill } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const ShowBook = () => {
  const { id } = useParams()
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`http://localhost:5555/books/${id}`)
        const data = await res.json()
        if (res.ok) {
          setBook(data) // Previously was setBook(data.data) but looking at other components data is just the object
        } else {
          setError(data.message)
        }
      } catch (error) {
        setError('Internal Server Error')
      }
      setLoading(false)
    }
    fetchBook()
  }, [id])
    
  return (
    <div className='min-h-screen bg-gray-900 text-gray-100 p-6 md:p-12 font-sans'>
      <div className="max-w-3xl mx-auto">
        <BackButton />
        <h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 tracking-tight my-8 text-center'>
          Book Details
        </h1>
        
        {loading ? (
          <div className="flex justify-center mt-12"><Spinner /></div>
        ) : error ? (
           <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg text-center">{error}</div>
        ) : (
          <div className='relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-8 md:p-12 overflow-hidden mt-8 mx-auto w-full max-w-2xl'>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            
            <div className="flex justify-between items-start mb-8 border-b border-gray-700/50 pb-6">
              <div>
                 <h2 className="text-3xl font-bold text-gray-100 mb-2 flex items-center gap-3">
                    <PiBookOpenTextFill className="text-blue-400" />
                    {book.title}
                 </h2>
                 <h3 className="text-xl text-gray-400 flex items-center gap-3">
                    <BiUserCircle className="text-purple-400" />
                    {book.author}
                 </h3>
              </div>
              <span className="px-4 py-2 text-lg font-bold text-emerald-400 bg-emerald-900/30 rounded-xl border border-emerald-700/50">
                 ${book.price ? book.price : 'N/A'}
              </span>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='flex flex-col gap-2'>
                <span className='text-sm font-semibold text-gray-500 uppercase tracking-wider'>Book ID</span>
                <span className="font-mono text-gray-300 bg-gray-900/50 px-3 py-2 rounded-lg border border-gray-700/50">{book._id}</span>
              </div>
              
              <div className='flex flex-col gap-2'>
                <span className='text-sm font-semibold text-gray-500 uppercase tracking-wider'>Publish Year</span>
                <span className="text-gray-300 bg-gray-900/50 px-3 py-2 rounded-lg border border-gray-700/50 font-medium">{book.publishedYear}</span>
              </div>
              
              <div className='flex flex-col gap-2'>
                <span className='text-sm font-semibold text-gray-500 uppercase tracking-wider'>Date Created</span>
                <span className="text-gray-400 text-sm bg-gray-900/50 px-3 py-2 rounded-lg border border-gray-700/50">
                  {new Date(book.createdAt).toLocaleString()}
                </span>
              </div>
              
              <div className='flex flex-col gap-2'>
                <span className='text-sm font-semibold text-gray-500 uppercase tracking-wider'>Last Updated</span>
                <span className="text-gray-400 text-sm bg-gray-900/50 px-3 py-2 rounded-lg border border-gray-700/50">
                  {new Date(book.updatedAt).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ShowBook