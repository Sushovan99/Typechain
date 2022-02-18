import * as CryptoJS from "crypto-js";
class Block {
  constructor(
    public index: number,
    public hash: string,
    public prevHash: string,
    public data: string,
    public timeStamp: number
  ) {}

  static createBlockHash = (
    index: number,
    prevHash: string,
    data: string,
    timeStamp: number
  ): string => {
    return CryptoJS.SHA256(index + prevHash + data + timeStamp).toString();
  };
  // Validating Block structure
  static isStructureValid = (aBlock: Block): boolean => {
    return (
      typeof aBlock.index === "number" &&
      typeof aBlock.prevHash === "string" &&
      typeof aBlock.hash === "string" &&
      typeof aBlock.data === "string" &&
      typeof aBlock.timeStamp === "number"
    );
  };
}

// First block or Genesis Block
const genesisBlock: Block = new Block(
  0,
  "sdfdf334324",
  "",
  "Welcome to the Blockchain",
  18022022
);

// Blockchain list
let blockChain: Block[] = [genesisBlock];

const getBlockChain = (): Block[] => blockChain;
const getLatestBlock = (): Block => blockChain[blockChain.length - 1];
const getTime = (): number => Math.round(new Date().getTime() / 1000);

const getBlockHash = (aBlock: Block): string => {
  return Block.createBlockHash(
    aBlock.index,
    aBlock.prevHash,
    aBlock.data,
    aBlock.timeStamp
  );
};

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const nextIndex: number = previousBlock.index + 1;
  const timeStamp: number = getTime();
  const previousHash: string = previousBlock.hash;
  const newHash: string = Block.createBlockHash(
    nextIndex,
    previousHash,
    data,
    timeStamp
  );

  const newBlock = new Block(nextIndex, newHash, previousHash, data, timeStamp);

  addBlock(newBlock);

  return newBlock;
};

// Comparing new block with previous Block
const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (!Block.isStructureValid(candidateBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } else if (previousBlock.hash !== candidateBlock.prevHash) {
    return false;
  } else if (getBlockHash(candidateBlock) !== candidateBlock.hash) {
    return false;
  } else {
    return true;
  }
};

// Add new Block
const addBlock = (candidateBlock: Block): void => {
  if (isBlockValid(candidateBlock, getLatestBlock())) {
    blockChain.push(candidateBlock);
  }
};

// Creating new blocks
createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");

console.log(getBlockChain());
