var friendMatches = require("../data/friends.js");


module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendMatches);
    });
    app.post("/api/friendMatches", function(req, res) {
        var newFriends = req.body;
        for(var i = 0; i < newFriends.scores.length; ++i) {
            
//use ajax call using file path

        }
    }
}



app.post("/api/friends", function(req, res) {
    var friends = req.body;
    
    // friends.routeName = friends. //fill in with needed info?
});