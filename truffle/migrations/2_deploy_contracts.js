module.exports = function(deployer) {
	deployer.deploy([
		[localsCointoken, 0, 'LocalCoin(TESTNET)', 2, 0.1 * 1e18, 'DRIJHOEK', '1'],
		[localsInOut]
	]);
};