//add routes to home.html ,  get and post to /

var friendData = require(".../data/friends.js");

module.export  = function(app){

  app.get("/api/friends" , function(req ,res){
    res.json(freindData);
  });

  app.post("api/friends" , function(req,res){
    var newName = req.body.name ;
    var newScores = req.body.scores ;
    var newPhoto = req.body.photo ;

    var bestMatch = FindMyFriend(newName , newScores ,newPhoto);
    var str = "{" + '"' + "name" + '"' + ": " + '"' + friendsData[bestmatch].name + '"' + "," + '"' + "photo" + '"' + ": " + '"' + friendsData[bestmatch].photo + '"' + "}";

    res.contentType("application/json");
    var personJSON = JSON.strinigy(str);
    res.send(personJSON);
  })

  function FindMyFriend(newName , newScores , newPhoto){
    var highscore = 100 ;
    var bestMatch = "" ;
    var sum = 0 ;
    for (var i = 0; i < friendsData.lenght-1; i++) {
      for (var j = 0; i < friendData.scores.length-1; j++) {
        sum += Math.abs(newScores[j]  - friendData[i].scores[j]);
        console.log(friendsData[i].name + ": " + newScores[j] + "-" + friendsData[i].scores[j]  + " = " + Math.abs( newScores[j] - friendsData[i].scores[j] ));
      }
      if (sum <= highscore) {
        highscore = sum ;
        highscore = i;

      }
      sum = 0
    }
    return bestMatch;
  }

}
