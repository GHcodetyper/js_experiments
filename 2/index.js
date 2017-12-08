// index.js
console.log("Hello from JavaScript!");

//var moment = require('moment');
import moment from 'moment';
console.log(moment().startOf('day').fromNow());        // 20 hours ago


var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);