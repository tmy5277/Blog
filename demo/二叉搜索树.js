//���¶���һ���ڵ���
function Node(data,left,right){
    // �ڵ�ļ�ֵ
    this.data = data;
    // ��ڵ�
    this.left = left;
    // �ҽڵ�
    this.right = left;
    // ��ʾ�ýڵ�ļ�ֵ
    this.show = show;
}
// ʵ��show����
function show(){
    return this.data;
}


// ���������BST
// ��һ���ڵ����ԣ�����һЩ�����ķ��������¶���һ�����������BST��
function BST(){
    // ���ڵ��ʼ��Ϊ��
    this.root = null;
    // ����
    // ����
    this.insert = insert;
    // �������
    this.inorder = inorder;
    // �������
    this.preorder = preorder;
    // �������
    this.postorder = postorder;
}

//ʵ��insert���뷽��
function insert(data){
    // ����һ���ڵ㱣������
    var node = new Node(data,null,null);
    // ���潫�ڵ�node���뵽����
    // ������ǿյģ��ͽ��ڵ���Ϊ���ڵ�
    if(!this.root){
        this.root = node;
    }else{  //����Ϊ��
        // �жϲ��ڸ��ڵ����߻����ұ�
        // ������Ҫ����һ�¸��ڵ�
        // var parent = this.root;
        var current = this.root;
        var parent;
        // ���Ҫ����Ľڵ��ֵС�ڸ��ڵ��ֵ������ڸ��ڵ���ߣ�
        // ǰ���Ǹ��ڵ�����Ϊ�գ�����Ҫ�����ڵ�������һ�㣬
        // Ȼ�������ж�
        while(true){
            // dataС�ڸ��ڵ�ļ�ֵ
            parent = current;
            if(data < parent.data){
                // �����ڵ���������(�������)
                // parent = parent.left;
                current = current.left;
                // ����ڵ�Ϊ�գ���ֱ�Ӳ���
                if(!current){
                    // �������˴��ر�ע�⣬�����������parent��ֵΪnode��Ҳ����ֻ��parentָ��node��
                    // ����û�мӵ���Ԫ�ص���ߣ���������û�мӵ�����ȥ������Ҫ�ȼ�ס��Ԫ�أ��ٰѵ�ǰԪ�ؼ����ȥ
                    parent.left = node;
                    break;
                }           
            }else{  // �����ڵ���������(�����ұ�)
                current = current.right;
                if(!current){
                    parent.right = node;
                    break;
                }
            }
        }

    }
} 

//ʵ��inorder��������(������)
function inorder(node){
    if(node){
        inorder(node.left);
        console.log(node.show());
        inorder(node.right);
    }
}

// �������(������)
function preorder(node){
    if(node){
        console.log(node.show());
        preorder(node.left);
        preorder(node.right);
    }
}

// �������(������)
function postorder(node){
    if(node){
        preorder(node.left);
        preorder(node.right);
        console.log(node.show());
    }
}

���ԣ�

// �������(������)
function postorder(node){
    if(node){
        postorder(node.left);
        postorder(node.right);
        console.log(node.show());
    }
}



//��֤
// ʵ����һ��BST��
var tree = new BST();
// ��ӽڵ�
tree.insert(30);
tree.insert(14);
tree.insert(35);
tree.insert(12);
tree.insert(17);
// �������
tree.inorder(tree.root);
// �������
tree.preorder(tree.root);
// �������
tree.postorder(tree.root);