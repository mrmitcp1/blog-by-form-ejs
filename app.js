const express = require ('express');
const app = express();
const PORT = 3333;
const multer = require('multer');
const upload = multer();

app.set('views', './views')
app.set('view engine', 'ejs')
app.get('/',(req, res)=>{
    res.render('writeblog')
})

const arrayBlog = [];
app.post('/showblog', upload.none(),(req, res)=>{
    if (req.body.title && req.body.content){
        const blog = {
            title : req.body.title,
            content: req.body.content
        }
        arrayBlog.push(blog);
        res.render('showblog', {blog})
    }
})

app.listen(PORT, ()=>{
    console.log('http//localhost:'+PORT)
})