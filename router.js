const express = require("express");
const router = express.Router();

const seriesDB = require("./series");
const moviesDB = require("./movies");


router.get("/api/v1/series", (req, resp) => {
    const list = seriesDB.getSeries();
    resp.statusCode = 200;

    resp.send(list);
});

router.get("/api/v1/series/:company", (req, resp) => {
    let company = req.params.company.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));

    const list = seriesDB.getSeriesByCompany(company);

    resp.statusCode = 200;
    resp.send(list);

});


router.get("/api/v1/movies", (req, resp) => {
    const list = moviesDB.getMovies();
    resp.statusCode = 200;

    resp.send(list);
});

router.get("/api/v1/movies/:company", (req, resp) => {
    let company = req.params.company.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    const list = moviesDB.getMoviesByCompany(company);

    resp.statusCode = 200;
    resp.send(list);
});

module.exports = router;