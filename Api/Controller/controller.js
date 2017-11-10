var mongoose = require('mongoose');
var Users = mongoose.model('userDetail');
var Movies= mongoose.model('Movie');
var Series= mongoose.model('Serie');
var Seasons= mongoose.model('Season');
var Episodes= mongoose.model('Episode');

// var nodemailer = require('nodemailer');
// var smtpTransport = require('nodemailer-smtp-transport');
bcrypt=require('bcrypt');


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


exports.getMoviesByGenre= function (req,res){
    var genre= req.params.genre;
 Movies.find({genre:genre},function(err, response){
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
 
exports.addMovie = function (req, res){
    var movie=new Movies({
        name: req.body.name,
        descriprtion: req.body.description,
        genre: req.body.genre
      });

   movie.save(function(error,response){
       if(error)
       res.json({success: false,
           body: error});
       else{
         
      res.json({sucess: true,
           body: response});
       }

           });
   }

   exports.deleteMovie = function(req, res) {
    var name=req.params.name;
     Movies.remove({
       name: name
     }, function(err, task) {
       if (err)
         res.send(err);
       res.json({ 
        success: true,   
        message: ' Movie deleted successfully' });
     });
   };

   exports.deleteSeries = (req, res)=>{
       var name=req.body.name;
       Series.remove({name: name}).exec().then(
           series=>{
               Seasons.find(series: series.name).then( 

               )
           }
       )

   }


   





