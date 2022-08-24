/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
  //create a new node
  let node = new Node(val);
  
  //if we have an empty list, add the node and make it the head and set the tail to be the head since
  //they're the same with a linked list of one element
  if (this.head == null) {
    this.head = node;
    this.tail = this.head;
  }
  else {
    this.tail.next = node;
    this.tail = node;
  }

  this.length++

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
  //create a new node
  let node = new Node(val);
  //used to store current node
  let current;

  if (!this.length) {
    this.tail = node;
  } 
  else {
    current = this.head;
    node.next = current;
  }

  this.head = node;
  this.length++
}

  /** pop(): return & remove last item. */
  //todo: revise this one to pass tests
  pop() {
  
  if (!this.length) {
    return new Error('You cannot remove an item from an empty linked list')
  }

  else {
    let currentNode = this.head;
    let previousNode = this.head;

    while(currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
     this.tail = previousNode;
     this.tail.next = null;
     this.length--;

     if (this.length === 0) {
      this.head = null;
      this.tail = null;
     }
     return currentNode;
    }

  }


  /** shift(): return & remove first item. */

  shift() {
  
  if (this.length === 0) {
    return new Error('You cannot remove the first item from an empty linked list')
  }

  let nodeToRemove = this.head;
  this.head = this.head.next;
  this.length--;

  if (this.length === 0) {
    this.tail = null;
  }

  return nodeToRemove;

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  if (idx < 0 || idx >= this.length) {
    return new Error("You've tried to remove from an invalid index")
  }

  else {
    let currNode = this.head;
    let count = 0; //this is used to keep track of how many times we moved to the next node

    while (count < idx) {
      currNode = currNode.next;
      count++;
    }

    return currNode;   
  }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
  
    if (idx < 0 || idx >= this.length) {
      return new Error("You've tried to set a value at an invalid index")
    }

    else {
      let currNode = this.getAt(idx);
      // if the node exists at the current index
      if (currNode) {
        // set its value to the desired new value
        currNode.val = val;
        return currNode;
      } 
      else {
        // if the node does not exist, return null
        return null;
      }
    }

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

    if (idx < 0 || idx >= this.length) {
      return new Error("You've tried to insert an node at an invalid index")
    }

    else if (idx == 0) {
      //we're at the beginning of the linked list so we add to index 0
      return this.unshift(val);
    }

    else if (idx == this.length) {
      //we're at the end of the linked list so we push to the final index
      return this.push(val);
    }

    else {
      const placeBeforeIdx = this.getAt(idx-1);
      const newNode = new Node(val);
      newNode.next = placeBeforeIdx.next;
      placeBeforeIdx.next = newNode;

      this.length++;
      return newNode;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return new Error("You've tried to insert an node at an invalid index")
    }

    else if (idx == 0) {
      //we're at the beginning of the linked list so we remove the node at index 0
      return this.shift(val);
    }
    
    else if (idx == this.length - 1) {
      //we're at the end of the linked list so we remove the node from the final index
      return this.pop(val);
    }

    else {
      let nodeBeforeRemove = this.getAt(idx-1);
      let nodeToRemove = nodeBeforeRemove.next;
      nodeBeforeRemove.next = nodeToRemove.next;
      this.length--;
      return nodeToRemove;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    else {
      let count = 0;
      let avg = 0.0;
      let sum = 0;
      let currentNode = this.head;
      while (currentNode != null) {
        count++;
        sum += currentNode.val;
        current = currentNode.next;
      }

      avg = sum / count;

      return avg;

    }
  }
}

module.exports = LinkedList;
