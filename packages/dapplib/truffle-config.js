require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remember evil include kitchen olympic gather'; 
let testAccounts = [
"0x0710f39c642ec705542e9405f2168d0515b35e596dc6f4e1e1bf5eb9b55d2353",
"0x271c1daa688f2981c4d3947ecd54b605ad1d2cbd48a3ffd1a8754e2ac10576f7",
"0x9d43803378c6a66cc1bccd76e231b2f4d6f79f239c07defabe1e1bb302bc8fde",
"0x9bc14bd6b8d38156c191a6d7ef1ae1f0c6d304fd89e70c233b26c59e89300c57",
"0x399b8e06cc8bb35fc718309e6ee6f3ec6d81036b5fa5a33027b19a37bbe10fa2",
"0xde84bde98e0e23bc4db251bc662bf007566a49bf5d931cf8d53d18e140aca380",
"0x0f5cf8697e6a6ece4d4c3592b6d63ffee0e09aa38014172d3e656e45dfd731fb",
"0xa9ee1a0e541d8907111bfcf511e135e8ee5fe2f8f42600b1b113a6fca0fbfd5d",
"0x4a518b5be5ebc6e83c6b8c28e0fac877777e9630d7214b2399f46ce964b83f67",
"0x3e7710ebcb63e4ece5dec235516d895d96a46a44143300f81c974906f85d4ae9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

