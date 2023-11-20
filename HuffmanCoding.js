const HuffmanNode = require('./HuffmanNode');

class HuffmanCoding {
    constructor(charArray, charFreq) {
        this.charArray = charArray;
        this.charFreq = charFreq;
        this.queue = [];
        this.initializePriorityQueue();
        this.constructHuffmanTree();
        this.printHuffmanCodes();
    }
    /*Sort the characters in increasing order of the frequency. These are stored in a 
    priority queue.*/
    initializePriorityQueue() {
        for (let i = 0; i < this.charArray.length; i++) {
            const newNode = new HuffmanNode();
            newNode.character = this.charArray[i];
            newNode.frequency = this.charFreq[i];
            newNode.left = null;
            newNode.right = null;
            this.queue.push(newNode);
        }
        //sort queue in ascending order of their frequencies.
        this.queue.sort((a, b) => a.frequency - b.frequency);
    }

    constructHuffmanTree() {
        let root = null;
        /*Remove these two minimum frequencies from queue and add the sum into the list of
         frequencies (* denote the internal nodes)*/
        while (this.queue.length > 1) {
            /* Extract the two nodes with the minimum frequencies from the front of the 
            priority queue.*/
            const x = this.queue.shift();
            const y = this.queue.shift();

            const internalNode = new HuffmanNode();
            // take the sum of 2 minimum frequencies then assign them to internal node.
            internalNode.frequency = x.frequency + y.frequency;
            /*it is not an actual character but an internal node by  assign a placeholder 
            character (e.g., '-') to the character of the internal node*/
            internalNode.character = '-';
            internalNode.left = x;
            internalNode.right = y;

            root = internalNode;//return root node

            this.queue.push(internalNode);
            this.queue.sort((a, b) => a.frequency - b.frequency);//Sort the characters in increasing order of the frequency.
        }

        this.root = root;
    }

    printCode(root, currentCode) {//root,code of character
        if (root.left === null && root.right === null && root.character.toLowerCase() !== root.character.toUpperCase()) {
            console.log(`${root.character}: ${currentCode}`);
            return;
        }
        //For each non-leaf node, assign 0 to the left edge and 1 to the right edge. 
        this.printCode(root.left, currentCode + '0');
        this.printCode(root.right, currentCode + '1');
    }

    printHuffmanCodes() {
        this.printCode(this.root, '');
    }
}


module.exports = HuffmanCoding;
