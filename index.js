'use strict';
var path = require('path')
var processCWD = global.fis.processCWD
var babel = require(path.resolve(processCWD, 'node_modules/babel-core'));
module.exports = function (content, file, conf) {
   // 只有es.js后缀名的需要babel编译
   var reg = /\.es\.js$/, fullname = file.fullname
    if (!reg.test(fullname)) {
        return content;
    }

    var result = babel.transform(content, conf);
    return result.code;
};