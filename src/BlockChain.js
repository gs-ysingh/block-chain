export default class BlockChain {
	constructor() {
		this.blockList = [];
	}

	addToBlockChain(block) {
		if(this.getBlockChainSize() > 0) {
			block.setPreviousHash(this.getPreviousBlock().getHash());
		}
		this.blockList.push(block);
	}

	getPreviousBlock() {
		return this.getBlockChainList()[this.getBlockChainSize() - 1];
	}

	getBlockChainList() {
		return this.blockList;
	}

	getBlockChainSize() {
		return this.blockList.length;
	}
}