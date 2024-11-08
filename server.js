// app.js
const express = require('express');

const app = express();



const PORT = process.env.PORT || 3000;


    
// Set EJS as the templating engine
app.use('./public', express.static('public'));
app.set('view engine', 'ejs');


// Route to display posts
app.get("/", (req, res) => {
        
// Sample data for posts
const posts = [
    {
        userName: "John Doe",
        postDate: "2023-10-01",
        message: "This is my first post!"
    },
    {
        userName: "Jane Smith",
        postDate: "2023-10-02",
        message: "Hello, world! Excited to share my thoughts."
    },
    {
        userName: "Alice Johnson",
        postDate: "2023-10-03",
        message: "Node.js is awesome!"
    }
]
// res.send("posts");
res.render("server", { posts: posts });

        
});


app.use(routes);


    // Start the server
    app.listen(3000, () => {
        console.log("Server is running on http://localhost:3000");
    });

  