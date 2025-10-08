💰 Budget Tracker

A full-stack web application to track and manage your daily expenses.
Built with HTML, CSS, Bootstrap, JavaScript on the frontend and Node.js, Express, MongoDB on the backend.
The project allows users to add expenses, view their expense history, and interact with a REST API.

🌟 Key Features

Add & View Expenses: Quickly add expense entries and view them in a dynamic list.

RESTful API: Backend API endpoints for fetching and adding expenses.

User-Friendly Interface: Clean and responsive design with Bootstrap.

Data Persistence: Stores expense data in MongoDB for reliable access.

Postman Integration: Test API endpoints easily with Postman.

📂 Directory Structure
budget-project/
├─ backend/             
│  ├─ server.js         # Main backend server script
│  ├─ package.json      # Node.js project dependencies
│  ├─ models/           
│  │  └─ Expense.js     # Mongoose schema for expenses
│  └─ routes/           
│     └─ expenses.js    # API endpoints
├─ frontend/            
│  ├─ index.html        # Frontend HTML page
│  ├─ styles.css        # Custom styles
│  └─ script.js         # Frontend JavaScript logic
└─ README.md            # Project documentation

⚙️ Installation & Setup

Clone the repository

git clone https://github.com/Soumyajit63/Budget.git


Navigate to the backend folder

cd Budget/backend


Install backend dependencies

npm install


Set up environment variables

Copy .env.example to .env

Replace MONGODB_URI with your MongoDB connection string

cp .env.example .env


Start the backend server

npm run dev   # or npm start


Open the frontend
Open frontend/index.html in your browser (or use Live Server) while the backend is running.

📈 How It Works

User submits a new expense from the frontend form.

The frontend sends the data to the backend API (POST /api/expenses).

Backend saves the expense in MongoDB.

Expenses are fetched (GET /api/expenses) and displayed instantly on the frontend.

🔮 Future Improvements

Add user authentication (login/signup).

Enable category-based expense tracking.

Integrate charts and analytics (Chart.js) for visual insights.

Deploy to Heroku or Vercel for online access.

🧑‍💻 Author

Soumyajit Gouda – GitHub Profile
