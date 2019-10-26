var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;
 
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());

require("./app/routing/htmlRoutes.js");
require("./app/routing/htmlRoutes.js");

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});



// document.addEventListener("click", test() 
//     // document.
// });

// var object = {
//     "name": $("#emailHelp").val();
// }