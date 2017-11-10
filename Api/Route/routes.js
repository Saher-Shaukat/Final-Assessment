var express = require('express');
var router = express.Router();
var controller = require('../controller/controller');


router.route('/v1/getUser/:email/:password')
    .get(controller.getUser);
router.route('/v1/createUser')
    .post(controller.createUser);

router.route('/v1/addMovie')
    .post(controller.addMovie);

router.route('/v1/getMovies/:genre')
     .get(controller.getMoviesByGenre);

     router.route('/v1/getSeries/:genre')
     .get(controller.getSeriesByGenre);

     router.route('/v1/deleteMovie/:name')
     .delete(controller.deleteMovie);
    


module.exports = router;