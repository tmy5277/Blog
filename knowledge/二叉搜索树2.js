function BinarySearchTree() {
    var Node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null;



    var insertNode = function(node,newNode){
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            }
            else{
                insertNode(node.left,newNode);
            }
        }
        else{
            if (node.right === null) {
                node.right = newNode;
            }
            else{
                insertNode(node.right,newNode);
            }
        }
    };

    var inOrderTraverseNode = function(node,callback){
        if (node !== null) {
            inOrderTraverseNode(node.left,callback);
            callback(node.key);
            inOrderTraverseNode(node.right,callback);
        }
    };

    var preOrderTraverseNode = function(node,callback){
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left,callback);
            preOrderTraverseNode(node.right,callback);
        }
    };

    var postOrderTraverseNode = function(node,callback){
        if (node !== null) {
            callback(node.key);
            postOrderTraverseNode(node.left,callback);
            postOrderTraverseNode(node.right,callback);
        }
    };

    var maxNode = function(node){
        if (node) {
            while(node&&node.right !== null){
                node = node.right;
            }
            return node.key;
        }
        return null;
    };

    var minNode = function(node){
        if (node) {
            while(node&&node.left !== null){
                node = node.left;
            }
            return node.key;
        }
        return null;
    };

    var minNodeSelf = function(node){
        if (node) {
            while(node&&node.left !== null){
                node = node.left;
            }
            return node;
        }
        return null;
    };

    var searchNode = function(node,key){
        if (node === null) {
            return false;
        }
        if (key<node.key) {
            return searchNode(node.left,key)
        }
        else if (key>node.key) {
            return searchNode(node.right,key)
        }
        else{
            return true;
        }
    };

    var removeNode = function(node,key){
        if (node === null) {
            return null;
        }
        if (key<node.key) {
            node.left = remove(node.left,key)
        }
        else if (key>node.key) {
            node.left = remove(node.right,key)
        }
        // 键等于node.key
        else{
            //叶节点
            if (node.left === null&&node.right === null) {
                node = null;
                return node;
            }
            // 只有一个子节点的节点
            if (node.left === null) {
                node = node.right;
                return node;
            }
            else if(node.right === null) {
                node = node.left;
                return node;
            }
            // 有两个子节点的节点
            var aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right,aux.key);
            return node;
        }
    };

    this.insert = function(key){
        var newNode = new Node(key);

        if (root === null) {
            root = newNode;
        }
        else{
            insertNode(node.left, newNode);
        }
    },

    this.inOrderTraverse = function(callback){
        inOrderTraverseNode(root,callback);
    },

    this.preOrderTraverse = function(callback){
        preOrderTraverseNode(root,callback);
    },

    this.postOrderTraverse = function(callback){
        postOrderTraverseNode(root,callback);
    },

    this.max = function(){
        return maxNode(root);
    },

    this.min = function(){
        return minNode(root);
    },

    this.findMinNode = function(){
        return minNodeSelf(root);
    },

    this.search = function(key){
        return searchNode(root,key);
    },

    this.remove =function(key){
        root = removeNode(root,key);
    }
}