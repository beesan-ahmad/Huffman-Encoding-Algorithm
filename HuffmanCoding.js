
const HuffmanNode = require('./HuffmanNode');

class HuffmanCoding {
  constructor(charArray, charFreq) {
    this.charArray = charArray;
    this.charFreq = charFreq;
    this.queue = [];
    this.initializePriorityQueue();
    this.constructHuffmanTree();
  }
  initializePriorityQueue() {
    for (let i = 0; i < this.charArray.length; i++) {
      const newNode = new HuffmanNode();
      newNode.character = this.charArray[i];
      newNode.frequency = this.charFreq[i];
      newNode.left = null;
      newNode.right = null;
      this.queue.push(newNode);
    }
  
    this.queue.sort((a, b) => a.frequency - b.frequency);
  }

  constructHuffmanTree() {
    let root = null;
  
    while (this.queue.length > 1) {
      const x = this.queue.shift();
      const y = this.queue.shift();
  
      const internalNode = new HuffmanNode();
      internalNode.frequency = x.frequency + y.frequency;
      internalNode.character = '-';
      internalNode.left = x;
      internalNode.right = y;
  
      root = internalNode;
  
      this.queue.push(internalNode);
      this.queue.sort((a, b) => a.frequency - b.frequency);
    }
  
    this.root = root;
  }
  

 

  
}

module.exports = HuffmanCoding;
