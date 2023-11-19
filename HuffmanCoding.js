
const HuffmanNode = require('./HuffmanNode');

class HuffmanCoding {
  constructor(charArray, charFreq) {
    this.charArray = charArray;
    this.charFreq = charFreq;
    this.queue = [];
    this.initializePriorityQueue();
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

 

  
}

module.exports = HuffmanCoding;
