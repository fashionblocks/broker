"use strict"
const common = require('../common');

exports.tokenHash = async function (req, res) {
    const body = req.body;
    const address = body.address;
    const tokenId = body.tokenId;
    const contractInstance = await common.nftInstance.at(address);
    const hash = await contractInstance.tokenIdToHash.call(tokenId);
    res.send(JSON.stringify({
        hash: hash
    }));
}


exports.findAllTokens = async function (req, res) {
    const body = req.body;
    const address = body.address;
    const projectId = body.projectId;
    const contractInstance = await common.nftInstance.at(address);
    const tokenIds = await contractInstance.projectShowAllTokens(projectId);
    res.send(JSON.stringify({
        ids: tokenIds
    }));
}
