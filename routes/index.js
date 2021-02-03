const express = require('express'),
    router = express.Router(),
    surveyModel = require('../models/surveyModel');

router.get('/', async function (req, res) {
    const surveyData = await surveyModel.getAll();
    console.log(surveyData);
        
    res.render ('template', {
        locals: {
            title: "Home Page",
            data: surveyData,
            surveyTitle: "Full Stack Skills"
        },
        partials: {
            body: 'partials/home',
        }
    });
});

module.exports = router;