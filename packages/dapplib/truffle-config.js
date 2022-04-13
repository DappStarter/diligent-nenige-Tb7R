require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remember smile hover enroll sun gate'; 
let testAccounts = [
"0xe62145198734378906aee78119cacf20a63ccd893574484cd0c3eef7580bfdb6",
"0x2d73678ae38a2db172440ca3436349f81f694ccf3ebbc2f3cc2388bd60a60541",
"0x436c9bd5b726903eec80cc3c496088beb6a5c1b0be7baad7ff1edaa4d82a471d",
"0xc88d68980fbe1d0d655ac2b57bb19567e208b2e7215bd2c3c53ac751728b670f",
"0xc550ad6dcee436cabd1134418b7cb414b81904d8622819ed2dac58816efb30c1",
"0x72e63603713abaa327adc6152c679f124dd0cecd234e16c311160de82ae4d332",
"0xf29f6758fd9180ef3fcc2981e113233ab1ecc8dabbd2140216f11be8668e128d",
"0x630c185042060bfc2d6937579e284c41d07a38e28e965716cbb23a17d4bfc404",
"0x86aea720eb02b75a40d80f12dace05d71ed9a6e7d751af6ce66febdadd89ec4a",
"0x186818e1c2be6a5f05a26d4a61d6bbc5b76bd615dfaca328cf0809602ad03233"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


