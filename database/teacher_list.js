var mongoose = require('mongoose');

var crup = require('./CRUP');

//监听连接事件
var db = mongoose.connection;
//失败时的回调
db.on('error', console.error.bind(console, 'connection failed'));
//生成表
var teacherSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    nickname: { type: String, required: true },
    age: { type: Number, required: true },
    sex: { type: String, required: true },
    tel: { type: Number, required: true },
});

var t = mongoose.model('t', teacherSchema);

module.exports = crup(mongoose, db, t);