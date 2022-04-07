"use strict"
const common = require('../common');
const config = require('../config');

exports.create = async function (req, res) {
    const body = req.body;
    const password = body.password;
    const address = await common.web3Instance.eth.personal.newAccount(password);

    res.send(JSON.stringify({
        address: address
    }));
}

exports.giveGas = async function (req, res) {
    const body = req.body;
    const address = body.address;
    const w = common.web3Instance;
    await w.eth.personal.unlockAccount(config.setting.deployAccount, config.setting.deployAccountKey);

    const tx = await w.eth.sendTransaction({
        from: config.setting.deployAccount,
        to: address,
        value: 1000000000000000000 * 2
    })
    console.log(tx);
    res.send(JSON.stringify({
        tx: tx
    }));
}