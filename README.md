📚 Digital Book Collection API

A RESTful backend API for managing a digital book collection, built using Node.js and Express. It provides full CRUD functionality and integrates with a cloud database for scalable storage.

🛠 Tech Stack
Node.js – Runtime environment
Express.js – Backend framework
MongoDB (Mongoose) – NoSQL database & ODM
dotenv – Environment configuration
CORS – Cross-origin request handling
🚀 Features
📖 Add new books
📚 Retrieve all books
🔍 Get a book by ID
✏️ Update book details
❌ Delete a book
☁️ Cloud database integration (MongoDB Atlas)
⚙️ Getting Started
📌 Prerequisites
Node.js installed
MongoDB Atlas account with an active cluster
🔧 Installation & Setup
Clone the repository
git clone https://github.com/bhv-897/Digital-Book-Collection.git
cd Digital-Book-Collection
Install dependencies
npm install
Create environment file

Create a .env file in the root directory:

MONGO_URI=your_mongodb_connection_string
PORT=5555
Run the server
npm run dev

📍 Server will run at:

http://localhost:5555
📁 Project Structure
Digital-Book-Collection/
│
├── models/          # Mongoose schemas
│   └── bookModel.js
│
├── routes/          # API routes
│   └── bookRoutes.js
│
├── controllers/     # Business logic (optional but recommended)
│   └── bookController.js
│
├── config/          # DB connection setup
│   └── db.js
│
├── .env             # Environment variables
├── .gitignore       # Ignored files
├── package.json     # Project metadata & dependencies
├── server.js        # Entry point
└── README.md        # Documentation
🔗 API Endpoints
Method	Endpoint	Description
GET	/books	Get all books
GET	/books/:id	Get book by ID
POST	/books	Add a new book
PUT	/books/:id	Update a book
DELETE	/books/:id	Delete a book
🧪 Example Request (POST)
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "publishedYear": 2018
}
🔐 Environment Variables
Variable	Description
MONGO_URI	MongoDB connection string
PORT	Server port (default: 5555)
📌 Future Improvements
🔐 Authentication (JWT)
📊 Pagination & filtering
⭐ Book ratings & reviews
🧑‍💻 User roles (Admin/User)
🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

📜 License

This project is licensed under the MIT License.