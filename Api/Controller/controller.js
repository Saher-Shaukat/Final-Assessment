var mongoose = require('mongoose');
var Users = mongoose.model('userDetail');
var Movies= mongoose.model('Movie');
var Series= mongoose.model('Serie');
var Seasons= mongoose.model('Season');
var Episodes= mongoose.model('Episode');

// var nodemailer = require('nodemailer');
// var smtpTransport = require('nodemailer-smtp-transport');
bcrypt=require('bcrypt');       // required to encrypt password


exports.getUser = (req,res) => {
    var email = req.params.email;
    var password= req.params.password;
    console.log(password+ " check pass"+ email);
    Users.findOne({email: email}).exec().then(user=>{
        if(user!== null){
            hashedPassword=user.password;
            bcrypt.compare(password, hashedPassword, function(err, response) {
                if(response) {
                      res.json({
                        success: true,
                        body: user
                    });// Passwords match
                } else {
                        res.json({
                            success: false,
                            body: "password does not match"
                        });// Passwords don't match
                } 
              });
        }
        else
        res.json(
            {
                success: false,
                body: "User doesnot exists"
            }
        );
       
    });
} 
exports.createUser = (req, res) => {
    var password=req.body.password;
    bcrypt.hash(password, 10, function(err, hash) {
        var user = new Users({
            email: req.body.email,
            name: req.body.name,
            admin: req.body.admin,
            password: hash
        });
        
        user.save((error, response) => {
            if (error) {
                 res.json(error);
            }
            else {
                res.json({
                    success: true,
                    body: response
                });
            }
        });
      });
    
} 

// CRUD on Movies
// to get all movies 
exports.getMovies= function (req,res){
   
 Movies.find({},function(err, response){
     if(err)
     res.send(err);
     else
     res.json(response);
 });
}
// to get movies by specific genre

exports.getMoviesByGenre= function (req,res){
    var genre= req.params.genre;
 Movies.find({genre:genre},function(err, response){
     if(err)
     res.send(err);
     else
     res.json(response);
 });
}
// add a new movie
exports.addMovie = function (req, res){
    var movie=new Movies({
        name: req.body.name,
        img_url: req.body.img_url,
        description: req.body.description,
        genre: req.body.genre
      });

   movie.save(function(error,response){
       if(error)
       res.json({success: false,
           body: error});
       else{
         
      res.json({success: true,
           body: response});
       }

           });
   }
// delete a movie
   exports.deleteMovie = function(req, res) {
    var name=req.params.name;
     Movies.remove({
       name: name
     }, function(err, task) {
       if (err)
         res.send(err);
       res.json({ 
        success: true,   
        message: 'Movie deleted successfully' });
     });
   };


// CRUD on Series

exports.getSeries= function (req,res){
    
  Series.find({},function(err, response){
      if(err)
      res.send(err);
      else
      res.json(response);
  });
 }
 
exports.getSeriesByGenre= function (req,res){
    var genre= req.params.genre;
 Series.find({genre:genre},function(err, response){
     if(err)
     res.send(err);
     else
     res.json(response);
 });
}
 


   exports.addSeries = function (req, res){
    var series=new Series({
        name: req.body.name,
        img_url: req.body.img_url,
        description: req.body.description,
        genre: req.body.genre
      });

   series.save(function(error,response){
       if(error)
       res.json({success: false,
           body: error});
       else{
         
      res.json({success: true,
           body: response});
       }

           });
   }

   // CRUD on seasons



   exports.addSeason = function (req, res){
    var season=new Seasons({
        name: req.body.name,
        img_url: req.body.img_url,
        description: req.body.description,
        series: req.body.series
      });

   season.save(function(error,response){
       if(error)
       res.json({success: false,
           body: error});
       else{
         
      res.json({success: true,
           body: response});
       }

           });
   }

   exports.addEpisode = function (req, res){
    var episode=new Episodes({
        number: req.body.number,
        img_url: req.body.img_url,
        description: req.body.description,
        series: req.body.series,
        season: req.body.season

      });

   episode.save(function(error,response){
       if(error)
       res.json({success: false,
           body: error});
       else{
         
      res.json({success: true,
           body: response});
       }

           });
   }
exports.searchMovie = function(req, res){
    var reg = req.params.name;
    regexp = new RegExp(reg, "i");
    Movies.find({  $or: [ { name: regexp }, { genre: regexp }, {description: regexp} ]}, function (err, movie) {
        if (err) {
            res.json(err);
        }
        if (movie) {
            res.json(movie);
        }
        else {
            res.json(null);
        }
    })

}
   



   
//    exports.deleteSeries = (req, res)=>{
//        var name=req.body.name;
//        Series.remove({name: name}).exec().then(
//            series=>{
//                Seasons.find(series: series.name).then( 

//                )
//            }
//        )

//    }


   





