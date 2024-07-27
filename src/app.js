

    const express = require('express')
    const app = express()

    const port = process.env.PORT || 3000

    
    const path = require ("path")
    const publicDirectory =  path.join(__dirname , '../public')
    app.use (express.static (publicDirectory))


    
app.set('view engine', 'hbs');

 const viewsDirectory = path.join (__dirname , '../Temp1/views')
 app.set('views', viewsDirectory);

 var hbs = require('hbs');
const partialsPath = path.join(__dirname , "../Temp1/partials")
hbs.registerPartials(partialsPath)

 
app.get ('/' , (req,res) => {
    res.render('index' , {
        title : "HOME",
        desc : "This is home page"
    })
})

app.get ('/service' , (req,res) => {
    res.render('service' , {
        title : "SERVICE",
        name: "Reem",
        city:"Taiz",
        age: 30,
        img1: "images/img1.jpg"
    })
})


app.get ('/team' , (req,res) => {
    res.render('team' , {
        title : "TEAM",
        name: "Reem",
        city:"Taiz",
        age: 30,
        img2: "images/img2.jpg"
    })
})



app.get('*',(reg,res)=> {
    res.send('404 page not found')
 })

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
    


