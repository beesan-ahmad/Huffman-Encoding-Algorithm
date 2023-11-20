const HuffmanCoding = require('./HuffmanCoding');

class Testing {
  //Executes the Huffman coding algorithm
  static run() {
    const charArray = ['a', 'b', 'c', 'd', 'e'];
    const charFreq = [5, 9, 12, 13, 16];

    new HuffmanCoding(charArray, charFreq);
  }
}

Testing.run();