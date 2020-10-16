const express=require("express");
const router=express.Router();
const Articles=require("../models/articles");


//Request get all articles
router.get("/",(req, res)=>{
    Articles.find()
    .then(article=>res.json(article))
    .catch(err=>res.status(400).json(`Error: ${err}`));
});

//Request add new articles
router.post("/add", (req, res) =>{
    const newArticle=new Articles({
        title: req.body.title,
        article: req.body.article,
        authorname: req.body.authorname
    });
    
    newArticle
    .save()
    .then(()=>res.json("The new article posted successfully!"))
    .catch(err=>res.status(400).json(`Error: ${err}`));
});

//Request find article by id
router.get("/:id",(req, res)=>{
    Articles.findById(req.params.id)
    .then(article=>res.json(article))
    .catch(err=>res.status(400).json(`Error: ${err}`));
});

//REQUEST FIND ARTICLE BY ID AND UPDATE
router.put('/update/:id',(req, res)=>{
    Articles.findById(req.params.id)
    .then(article=>{
        article.title=req.body.title;
        article.article=req.body.article;
        article.authorname=req.body.authorname;
    
        article
        .save()
        .then(()=>res.json("The Artcle is Updated"))
        .catch(err=>res.status(400).json(`Error: ${err}`))
    })
    .catch(err=>res.status(400).json(`Error: ${err}`));
    });

module.exports = router ;