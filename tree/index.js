import BSTree from './BSTree.js';

const tree = new BSTree();

tree.insert(27);
tree.insert(14);
tree.insert(35);
tree.insert(10);
tree.insert(19);

tree.remove(14);

tree.inorder(tree.root);
