"use strict"

const bodyParse = require('body-parser');

const project = require('./controller/project');
const token = require('./controller/token');

exports.setRequestUrl = function (app) {
    const jsonParse = bodyParse.json();

    app.post('/project/max-id', jsonParse, project.maxId);
    app.post('/project/script', jsonParse, project.projectScript)
    app.post('/project/info', jsonParse, project.projectInfo)

    app.post('/token/hash', jsonParse, token.tokenHash)
    app.post('/token/all', jsonParse, token.findAllTokens)

}
