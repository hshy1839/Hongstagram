const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connection = require('./db');
const PORT = process.env.PORT || 8864;
const app = express();

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({  
  secret: 'mySecretKey', 
  resave: false,
  saveUninitialized: false
}));

app.use(cors({
  origin: 'http://localhost:8864',
  methods: ['GET', 'POST'],
  credentials: true,
  optionsSuccessStatus: 200, 
}));

// MySQL에 연결
connection.connect((err) => {
  if (err) throw err;
  console.log('MySQL 데이터베이스에 연결되었습니다');
});

app.get('/', (req, res) => {
    res.send("Express Test");
    });

// 서버 시작
app.listen(PORT, (req, res) => {
  console.log(`listening on http://localhost:${PORT}`);
});
