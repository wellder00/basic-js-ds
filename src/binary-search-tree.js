const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  root() {
    return this.head;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.length === 0) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode) {
        if (data < currentNode.data) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
    this.length++;
  }

  has(data) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  remove(data) {
  this.head = removeNode(this.head, data);

  function removeNode(node, data) {
    if (!node) return null;
  
    if (data < node.data) {
      node.left = removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      let minRightEl = node.right;
      while (minRightEl.left) {
        minRightEl = minRightEl.left;
      }
      node.data = minRightEl.data;
      node.right = removeNode(node.right, minRightEl.data);
      return node;
    }
  }
  }

  min() {
  if (!this.head) {
    return
  }
    
    let node = this.head
    while (node.left) {
      node = node.left
    }

    return node.data
  }

  max() {
    if (!this.head) {
      return
    }

    let node = this.head
    while (node.right) {
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree,
};
