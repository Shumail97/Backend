
const Home =  (req, res) => {
    res.render ("../views/homepage.ejs")
}


const about =  (req, res) => {

   res.render('../views/about.ejs')
    }

    const notFound= (req, res) => {

     res.send("../views/")

    }


    module.exports =  { HomePage, aboutUser, notFoundPage }



