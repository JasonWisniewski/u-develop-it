const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db= mysql.createConnection(
  {
    host: 'localhost',
    user: '',
    password:'wizz2577',
    database: 'election'
  }
)

// default response for any other request (Not Found)
app.use((req,res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});