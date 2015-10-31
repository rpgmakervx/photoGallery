/**
 * Created by Administrator on 2015/10/31.
 */
var Photo =require("../lib/photo");
var objectid = require("objectid");
var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/tonghang", function (err) {
    if (err) {throw err;}
    else {
        console.log("mongoDB connected ");
    }
});
exports.insert = function (data,fn) {
    var photo = new Photo.Photo(data);
    photo.save(function (err) {
        if (err){console.log(err);}
        else {console.log("data saved! ");fn()}
    });
};
exports.findById = function (id,fn) {
    var _id = objectid.isValid(id)?id:objectid();
    Photo.Photo.find({_id:_id}, function (err,photo) {
        if(err){console.log(err);}
        fn(photo);
    });
};
exports.find = function (fn) {
    Photo.Photo.find({}, function (err,photos) {
        if(err){console.log(err);return {}}
        console.log("method find : "+photos);
        fn(photos);
    });
}