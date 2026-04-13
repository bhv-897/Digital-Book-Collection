import React, { useState } from 'react'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const CreateBook = () => {
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishedYear, setPublishedYear] = useState('')
  const [price, setPrice] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('http://localhost:5555/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, author, publishedYear, price })
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.message)
      }
      setLoading(false)

      enqueueSnackbar('Book created successfully', { variant: 'success' })
      navigate('/')
    } catch (error) {
      setError(error.message)
      enqueueSnackbar('Error creating book', { variant: 'error' })
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-gray-900 text-gray-100 p-6 md:p-12 font-sans'>
      <div className='max-w-2xl mx-auto'>
        <BackButton />
        <h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 tracking-tight my-8 text-center'>
          Create New Book
        </h1>
        {loading && (
          <div className="flex justify-center mb-4">
            <Spinner />
          </div>
        )}
        {error && <div className='bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg mb-6 text-center'>{error}</div>}
        
        <div className='bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl shadow-2xl'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label htmlFor='title' className='block text-gray-400 text-sm font-semibold mb-2'>Title</label>
              <input 
                type='text' 
                id='title' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                className='w-full bg-gray-900/50 border border-gray-700/50 rounded-lg px-4 py-3 text-gray-200 outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder-gray-600' 
                placeholder="Enter book title"
                required
              />
            </div>
            <div>
              <label htmlFor='author' className='block text-gray-400 text-sm font-semibold mb-2'>Author</label>
              <input 
                type='text' 
                id='author' 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} 
                className='w-full bg-gray-900/50 border border-gray-700/50 rounded-lg px-4 py-3 text-gray-200 outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder-gray-600' 
                placeholder="Enter author's name"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor='publishedYear' className='block text-gray-400 text-sm font-semibold mb-2'>Published Year</label>
                <input 
                  type='number' 
                  id='publishedYear' 
                  value={publishedYear} 
                  onChange={(e) => setPublishedYear(e.target.value)} 
                  className='w-full bg-gray-900/50 border border-gray-700/50 rounded-lg px-4 py-3 text-gray-200 outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder-gray-600' 
                  placeholder="e.g. 2024"
                  required
                />
              </div>
              <div>
                <label htmlFor='price' className='block text-gray-400 text-sm font-semibold mb-2'>Price ($)</label>
                <input 
                  type='number' 
                  step="0.01"
                  id='price' 
                  value={price} 
                  onChange={(e) => setPrice(e.target.value)} 
                  className='w-full bg-gray-900/50 border border-gray-700/50 rounded-lg px-4 py-3 text-gray-200 outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder-gray-600' 
                  placeholder="e.g. 19.99"
                  required
                />
              </div>
            </div>
            <button 
              type='submit' 
              className='w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 mt-4'
              disabled={loading}
            >
              {loading ? 'Creating...' : 'Create Book'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateBook