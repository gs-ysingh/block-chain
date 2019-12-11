import * as SHA256Helper from './SHA256Helper'

export default class Block {
	constructor(id, prevHash, transactions) {
		this.id = id;
		this.prevHash = prevHash;
		this.transactions = transactions;
		this.timestamp = new Date().getTime();
		this.nonce = 0;
		this.generateHash();
	}

	generateHash() {
		this.hash = SHA256Helper.generateHash(
			this.id + this.prevHash + this.transactions + this.timestamp + this.nonce
		);
	}

	getHash() {
		return this.hash;
	}

	setHash(hash) {
		this.hash = hash;
	}

	getPreviousHash() {
		return this.prevHash;
	}

	setPreviousHash(prevHash) {
		this.prevHash = prevHash;
	}

	incrementNonce() {
		this.nonce++;
	}
}