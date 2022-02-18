class Block {
  constructor(
    public index: number,
    public hash: string,
    public prevHash: string,
    public data: string,
    public timeStamp: number
  ) {}
}

const genesisBlock: Block = new Block(
  0,
  "sdfdf334324",
  "",
  "Hello world!",
  18022022
);

let blockChain: [Block] = [genesisBlock];

console.log(blockChain);
