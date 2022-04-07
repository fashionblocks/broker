"use strict"

const web3 = require('web3');
const contract = require('truffle-contract');
const config = require('./config');
const data = require('../build/contracts/GenArt721Core.json');


const myNFT = contract(data);
const provider = new web3.providers.HttpProvider(config.setting.geth);
myNFT.setProvider(provider);

const web3Instance = new web3();
web3Instance.setProvider(provider);

exports.nftInstance = myNFT;
exports.web3Instance = web3Instance;

