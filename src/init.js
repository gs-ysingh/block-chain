import BlockChain from './BlockChain';
import Block from './Block';
import Minor from './Minor';
import * as Constants from './Constants';

const blockChain = new BlockChain();
const minor = new Minor();

minor.addToBlockChain(new Block('0', Constants.GENESIS_PREV_HASH, 'transfer 1'), blockChain);
minor.addToBlockChain(new Block('1', blockChain.getBlockChainList[blockChain.getBlockChainSize() - 1], 'transfer 2'), blockChain);
minor.addToBlockChain(new Block('2', blockChain.getBlockChainList[blockChain.getBlockChainSize() - 1], 'transfer 3'), blockChain);

console.log(JSON.stringify(blockChain));
console.log(minor.getRewards());

// {
//   "blockList": [
//     {
//       "id": "0",
//       "prevHash": "0000000000000000000000000000000000000000000000000000000000000000",
//       "transactions": "transfer 1",
//       "timestamp": 1576063908804,
//       "nonce": 3176150,
//       "hash": "00000196f2d8395afd006aa397194291b1fef77b0b95bbb2f7cc7f36c8390466"
//     },
//     {
//       "id": "1",
//       "prevHash": "00000196f2d8395afd006aa397194291b1fef77b0b95bbb2f7cc7f36c8390466",
//       "transactions": "transfer 2",
//       "timestamp": 1576063918272,
//       "nonce": 940567,
//       "hash": "000006815a347fa3068b6156660e5dfd3aa09a85c9472813ad7110096af7d152"
//     },
//     {
//       "id": "2",
//       "prevHash": "000006815a347fa3068b6156660e5dfd3aa09a85c9472813ad7110096af7d152",
//       "transactions": "transfer 3",
//       "timestamp": 1576063920881,
//       "nonce": 1723990,
//       "hash": "0000076c33b4999c68ef87e697f459c613b0f7be910e9c89b009f1b144e8c0ca"
//     }
//   ]
// }