const express=require("express");
const router=express.Router();
const Articles=require("../models/articles");


//Request get all articles
router.get("/",(req, res)=>{
    Articles.find()
    .then(article=>res.json(article))
    .catch(err=>res.status(400).json(`Error: ${err}`));
});

module.exports = router ;