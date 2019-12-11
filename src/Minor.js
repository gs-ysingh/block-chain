import * as Constants from './Constants';

export default class Minor {
	constructor() {
		this.rewards = 0;
	}
	
	addToBlockChain(block, blockChain) {
		while(!this.isGoldenBlock(block)) {
			block.generateHash();
			block.incrementNonce();
		}
		blockChain.addToBlockChain(block);
		this.rewards += Constants.MINOR_REWARD;
	}

	isGoldenBlock(block) {
		const hash = block.getHash();
		const str = '0'.repeat(Constants.DIFFICULTY);
		return hash.slice(0, Constants.DIFFICULTY) === str;
	}
}