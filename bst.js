class BinarySearchTree {
    constructor (key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        // If the tree is empty, then this key being inserted is the root node of the tree.
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }

        /* If the tree already exists, then start at the root,
           and compare it to the key that you want to insert.
           If the new key is less than the node's key,
           then the new node needs to live in the left-hand branch. */
        else if (key < this.key) {
            /* If the existing node does not have a left child,
               meaning that the `left` pointer is empty,
               then you can just instantiate and insert the new node
               as the left child of that node, passing `this` as the parent. */
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            /* If the node has an existing left child,
               then you recursively call the `insert()` method
               so that the node is added further down the tree. */
            else {
                this.left.insert(key, value);
            }
        }
        /* Similarly, if the new key is greater than the node's key,
           then you do the same thing, but on the right-hand side. */
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }

    find(key) {
        // If the item is found at the root, then return that value.
        if (this.key == key) {
            return this.value;
        }
        /* If the item that you are looking for is less than the root,
           then follow the left child.
           If there is an existing left child,
           then recursively check its left and/or right child
           until you find the item. */
        else if (key < this.key && this.left) {
            return this.left.find(key);
        }
        /* If the item that you are looking for is greater than the root,
           then follow the right child.
           If there is an existing right child,
           then recursively check its left and/or right child
           until you find the item. */
        else if (key > this.key && this.right) {
            return this.right.find(key);
        }
        // You have searched the tree, and the item isn't in the tree.
        else {
            throw new Error('Key Not Found');
        }
    }
}