const Smartape = artifacts.require("Smartape");
const truffleAssert = require('truffle-assertions');


contract("Smartape", (accounts) => {
    it('should credit an NFT to a specific account', async () => {
        const smartapeInstance = await Smartape.deployed();
        let txResult = await smartapeInstance.safeMint(accounts[1],"smartape_1.json");

        truffleAssert.eventEmitted(txResult, 'Transfer', {from: '0x0000000000000000000000000000000000000000', to: accounts[1], tokenId: web3.utils.toBN("0")});

        assert.equal(await smartapeInstance.ownerOf(0), accounts[1], "Owner of Token is the wrong address");
    })
})
