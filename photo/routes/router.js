var express = require('express');
var path = require("path");
var fs = require("fs");
var futil = require("../lib/futil");

var router = express.Router();
var Db = require("../lib/db");
/* GET home page. */
router.get("/", function (req,res,next) {
  Db.find(function (data) {
    res.render("show",{photo:data});
});
console.log("mongodb 查询");
});
router.get("/photo/:id", function (req, res) {
  Db.findById(req.params.id, function (photo) {
    res.render("show",{photo:photo});
  });
  console.log("mongodb 查询条件："+req.params.id);
})

router.get("/upload", function (req,res) {
  res.render("index");
});

    /*POST Method*/
router.post("/upload", function (req,res) {
    var image_file = path.join(__dirname,"../public/images/") + req.files[0].originalname;
    console.log("images_file: "+image_file);
    futil.fileUpload(req.files[0].path,image_file,function () {
      var photo = {
        path:path.join("images/",req.files[0].originalname),
        name:req.files[0].originalname
      };
      Db.insert(photo, function (err) {
        if(err){
          res.render("error");
        }else{
          res.redirect("/");
        }
      });
    })
});
router.get('*', function(req, res){
  res.render('error', {
    message: '404 Not Found'
  })
});
module.exports = router;
