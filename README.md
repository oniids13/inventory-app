# 📦 Inventory App

An inventory management web application built with Node.js, Express, PostgreSQL, and EJS templating. This app allows users to manage item categories and items, add new inventory, and search/filter through entries with ease.

## 🚀 Features

- ✅ Add, edit, and delete items
- 📂 Categorize inventory items
- 🔍 Search and filter by keyword or category
- 🧾 Server-side rendered views using EJS
- 🗄️ PostgreSQL database integration
- 🌐 Deployed on Railway

## 🛠️ Technologies Used

- Node.js
- Express
- PostgreSQL
- EJS
- Railway (for database hosting)
- Bootstrap (for styling)

## 📸 Screenshots

Coming soon!

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/oniids13/inventory-app.git
cd inventory-app

 Install dependencies

npm install

Set up your environment
Create a .env file in the root folder and add your PostgreSQL connection string:

DATABASE_URL=your_postgres_connection_string

Seed the database (optional)

If you have a seed file located at db/populate.js, you can run:

npm run seed

Start the server

npm start


📁 Project Structure

inventory-app/
├── controllers/
│   └── indexController.js
├── db/
│   ├── queries.js
│   └── populate.js
├── public/
├── routes/
│   └── indexRouter.js
├── views/
│   ├── index.ejs
│   ├── addItemForm.ejs
│   └── ...
├── .env
├── app.js
└── package.json

🌍 Live Deployment
🔗 View App on Railway -> https://inventory-app-production-c73b.up.railway.app/

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

Made with 💻 by oniids13
