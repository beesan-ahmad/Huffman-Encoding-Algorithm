const HuffmanCoding = require('./HuffmanCoding');

class Testing {
  //Executes the Huffman coding algorithm
  static run() {
    const charArray = ['a', 'b', 'c', 'd', 'e'];
    const charFreq = [0.35, 0.1, 0.2, 0.2, 0.15];

    new HuffmanCoding(charArray, charFreq);
  }
}

Testing.run();