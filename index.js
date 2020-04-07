
const express = require('express');
const shortid = require('shortid')

const server = express();

const port = 5002;
server.listen(port, () => console.log(`\n== api on port ${port} ==\n`))

let users =[ 
    {
        id: "",
        name: "Henry",
        bio: " Lambda Student Web28"
    },

    {
      id: "",
      name: "Pam",
      bio: " Lambda Student Web27"
  }
];

//middleware
server.use(express.json());//teaches the server to parse JSON from the

server.get("/", (req, res) => {
  res.status(200).json({ api: "running..." });
});


//endpoints


//post users
server.post('/api/users', (req, res) =>{
    const userAdd = req.body;

    userAdd.id = shortid.generate();
    users.push(userAdd);

    res.status(201).json(users);

})

//get users
server.get("/api/users", (req, res) => {   
    res.status(200).json(users);
});

//get user by id
server.get(`/api/users/:id`, (req, res) => {
    const userid = req.params;
    const foundUser = users.find(user => user.id == {userid})
    res.status(201).json(foundUser)
});




console.log (`\n === Testing ===\n`) 