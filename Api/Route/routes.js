var express = require('express');
var router = express.Router();
var controller = require('../controller/controller');


router.route('/getUser/:email/:password')
    .get(controller.getUser);
router.route('/createUser')
    .post(controller.createUser);

router.route('/addMovie')
    .post(controller.addMovie);

router.route('/addSeries')
    .post(controller.addSeries);

router.route('/getMoviesByGenre/:genre')
     .get(controller.getMoviesByGenre);

router.route('/getMovies')
     .get(controller.getMovies);

router.route('/getSeries')
     .get(controller.getSeries);
router.route('/getSeriesByGenre/:genre')
     .get(controller.getSeriesByGenre);

router.route('/deleteMovie/:name')
     .delete(controller.deleteMovie);
    
router.route('/addSeason')
     .post(controller.addSeason);
router.route('/searchMovie/:name')
     .get(controller.searchMovie);

module.exports = router;