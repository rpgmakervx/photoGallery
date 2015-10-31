/**
 * Created by Administrator on 2015/10/29.
 */
var mongoose = require("mongoose");

var photos = new mongoose.Schema({
    name:String,
    path:String
});
exports.Photo = mongoose.model("photo",photos);
