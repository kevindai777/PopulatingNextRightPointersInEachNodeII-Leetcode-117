//Objective is to add a 'next' pointer to every node in a perfect binary tree,
//where each 'next' pointer points to the next node to the right. If there is no
//such node, the pointer points to null

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(1)
tree.addLeftNode(tree.root, 2)
tree.addRightNode(tree.root, 3)
tree.addLeftNode(tree.root.left, 4)
tree.addRightNode(tree.root.left, 5)
tree.addLeftNode(tree.root.right, 6)
tree.addRightNode(tree.root.right, 7)


//O(n) solution that traverses the tree once, then iterates over the result
//to add pointers

let result = []
    
function dfs(node, level) {
    if (!node) {
        return
    }
    
    if (!result[level]) {
        result[level] = []
    }
    result[level].push(node)
    
    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
}
dfs(root, 0)

for (let arr of result) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].next = arr[i + 1] ? arr[i + 1] : null
    }
}
    
return root