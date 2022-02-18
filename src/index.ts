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
}

const genesisBlock: Block = new Block(
  0,
  "sdfdf334324",
  "",
  "Hello world!",
  18022022
);

let blockChain: Block[] = [genesisBlock];

const getBlockChain = (): Block[] => blockChain;
const getLatestBlock = (): Block => blockChain[blockChain.length - 1];
const getTime = (): number => Math.round(new Date().getTime() / 1000);

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

  return new Block(nextIndex, newHash, previousHash, data, timeStamp);
};

blockChain.push(createNewBlock("hello"));
blockChain.push(createNewBlock("kitty"));

console.log(getBlockChain());
