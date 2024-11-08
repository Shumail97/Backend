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
res.render("index", { posts: posts });

        
