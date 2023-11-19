const HuffmanCoding = require('./HuffmanCoding');

class Testing {
  static run() {
    const charArray = ['a', 'b', 'c', 'd', 'e', 'f','g'];
    const charFreq = [5, 9, 12, 13, 16, 45,9];

    new HuffmanCoding(charArray, charFreq);
  }
}

Testing.run();
