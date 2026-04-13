📚 Digital Book Collection API



A RESTful backend API for managing a digital book collection, built using Node.js and Express.js. It provides full CRUD functionality and integrates with a cloud database for scalable storage.



🛠 Tech Stack

Node.js – Runtime environment

Express.js – Backend framework

MongoDB (Mongoose) – NoSQL database \& ODM

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

🔧 Installation \& Setup

1\. Clone the repository

git clone https://github.com/bhv-897/Digital-Book-Collection.git

cd Digital-Book-Collection

2\. Install dependencies

npm install

3\. Create environment file



Create a .env file in the root directory:



MONGO\_URI=your\_mongodb\_connection\_string

PORT=5555

4\. Run the server

npm run dev



📍 Server will run at:



http://localhost:5555

📁 Project Structure

Digital-Book-Collection/

│

├── models/                # Mongoose schemas

│   └── bookModel.js

│

├── routes/                # API routes

│   └── bookRoutes.js

│

├── controllers/           # Business logic (optional but recommended)

│   └── bookController.js

│

├── config/                # Database connection

│   └── db.js

│

├── .env                   # Environment variables

├── .gitignore             # Ignored files

├── package.json           # Dependencies \& scripts

├── server.js              # Entry point

└── README.md              # Documentation

🔗 API Endpoints

Method	Endpoint	Description

GET	/books	Get all books

GET	/books/:id	Get book by ID

POST	/books	Add a new book

PUT	/books/:id	Update a book

DELETE	/books/:id	Delete a book

🧪 Example Request (POST)

{

&#x20; "title": "Atomic Habits",

&#x20; "author": "James Clear",

&#x20; "publishedYear": 2018

}

🔐 Environment Variables

Variable	Description

MONGO\_URI	MongoDB connection string

PORT	Server port (default: 5555)

📌 Future Improvements

🔐 Authentication (JWT)

📊 Pagination \& filtering

⭐ Book ratings \& reviews

🧑‍💻 User roles (Admin/User)

🤝 Contributing



Contributions are welcome!

Feel free to fork the repo and submit a pull request.



📜 License



This project is licensed under the ISC License.

