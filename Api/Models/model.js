var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
    email: { type : String, required: true , unique: true},
    name: { type: String},
    password: { type: String, required: true },
    admin: {type: Boolean , default: false}
    
});

var moviesSchema = new Schema ({
    name: { type : String , unique: true},
    img_url: {type: String}, 
    description: { type: String },
    genre: {type: String, required: true}
   
});

var seriesSchema = new Schema ({
    name: { type : String , unique: true},
    img_url: {type: String},
    description: { type: String },
    genre: {type: String, required: true}
   
});

var seasonsSchema = new Schema ({
    name: { type : String , required: true },
    img_url: {type: String},
    description: { type: String },
    series: {type: String, required: true}
   
});

var episodesSchema = new Schema ({
    number: { type : Number },
    description: { type: String },
    series: {type: String, required: true},
    season : {type: String, required: true}
   
});



var Users =mongoose.model('userDetail',userSchema);
var Movies= mongoose.model('Movie',moviesSchema);
var Series= mongoose.model('Serie',seriesSchema);
var Seasons= mongoose.model('Season',seasonsSchema);
var Episodes= mongoose.model('Episode',episodesSchema);

module.exports = Users , Movies, Series, Episodes;