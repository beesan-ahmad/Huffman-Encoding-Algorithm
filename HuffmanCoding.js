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
        // Ensure there are elements in the queue
        if (this.queue.length <= 1) {
            console.error("Error: Insufficient elements in the priority queue for Huffman coding.");
            return;
        }

        let root = null;
        /*Remove these two minimum frequencies from queue and add the sum into the list of
             frequencies (* denote the internal nodes)*/
        while (this.queue.length > 1) {
            /* Extract the two nodes with the minimum frequencies from the front of the 
                    priority queue.*/
            const x = this.queue.shift();
            const y = this.queue.shift();
            // take the sum of 2 minimum frequencies then assign them to internal node.    
            const internalNode = new HuffmanNode();
            internalNode.frequency = x.frequency + y.frequency;
            /*it is not an actual character but an internal node by  assign a placeholder 
            character (e.g., '-') to the character of the internal node*/
            internalNode.character = '-';
            internalNode.left = x;
            internalNode.right = y;
            //return root node
            root = internalNode;

            this.queue.push(internalNode);
            //Sort the characters in increasing order of the frequency.
            this.queue.sort((a, b) => a.frequency - b.frequency);
        }

        // Check if the sum of frequencies is not equal to one
        if (root && root.frequency !== 1) {
            console.error("Error: The sum of frequencies is not equal to one for Huffman coding.");
            this.root = null; // Reset the root to null
            return;
        }

        this.root = root;
    }

    printCode(root, currentCode) {//root,code of character
        if (root === null) {
            console.error("Error: Huffman tree is not properly constructed.");
            return;
        }

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
