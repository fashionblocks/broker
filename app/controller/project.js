"use strict"
const common = require('../common');

exports.maxId = async function (req, res) {
    const body = req.body;
    const address = body.address;
    const contractInstance = await common.nftInstance.at(address);
    const id = await contractInstance.nextProjectId.call();
    res.send(JSON.stringify({
        projectId: id
    }));
}

exports.projectInfo = async function(req, res) {
    const body = req.body;
    const address = body.address;
    const projectId = body.projectId;
    const contractInstance = await common.nftInstance.at(address);
    const result = await contractInstance.projectDetails(projectId);
    res.send(JSON.stringify(result));
}

exports.projectScript = async function(req, res) {
    const body = req.body;
    const address = body.address;
    const projectId = body.projectId;
    const contractInstance = await common.nftInstance.at(address);
    const result = await contractInstance.projectScriptByIndex(projectId, 0);

    res.send(JSON.stringify({
        script: result
    }));
}
