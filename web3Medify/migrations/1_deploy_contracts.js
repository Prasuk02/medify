const Medify = artifacts.require("./Medify.sol");

module.exports = function (deployer) {
  deployer.deploy(Medify);
};
