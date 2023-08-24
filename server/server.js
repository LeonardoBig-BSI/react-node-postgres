
const express = require('express');
const cors = require('cors');
const pool = require('./database');
const app = express();

app.use(express.json());
app.use(cors());

// endpoints
app.get("/", (req, res) => {
    //console.log(req.body);
    res.status(200).json({ message: "Muito boa tarde cavalheiros" })
})

app.get("/getuser", (req, res) => {

  const { username, password } = req.body;

  const user = {
    username,
    password
  }  

  const selectSTMT = `SELECT * FROM accounts`;
  pool.query(selectSTMT)
    .then(() => {

        console.log("Selected Table!");
        res.status(200).json(user);
    })
    .catch((err) => {
        console.log(err);
    })

})

app.post("/adduser", (req, res) => {

    const { username, password } = req.body;
    const user = {
        username,
        password
    }
    console.log(`Username: ${user.username}`);
    console.log(`Password: ${user.password}`);

    const insertSTMT = `INSERT INTO accounts (username, password) VALUES ('${user.username}', '${user.password}');`;
    pool.query(insertSTMT)
        .then((response) => {
            console.log("Data Saved!");
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })
        console.log(req.body);
        
     res.status(200).json(user);
})

// port
app.listen(4000, () => console.log("Server on localhost:4000"));