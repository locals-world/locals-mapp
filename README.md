
#Here you'll find the source code for the Locals Mapp.

## installing
- npm install
- bower install
- gulp serve


## compiling and deploying the DAPP
### Prerequisites
- Make a lightwallet wallet with some ether on it - copy it to scripts/wallet.json

``cd truffle``
``node scripts/makewallet.js``


## Build the contracts

cd truffle
truffle compile
truffle migrate --reset

## copy the DAPP contracts to the web frontend

``node script/
