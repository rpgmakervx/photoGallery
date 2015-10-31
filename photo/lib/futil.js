/**
 * Created by Administrator on 2015/10/31.
 */
var path = require("path");
var fs = require("fs");

exports.fileUpload = function (originpath,newpath,fn) {
    fs.rename(originpath,newpath, function (err, data) {
        if(err){ throw err; }
        else{
            fn();
        }
    });
}