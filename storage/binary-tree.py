class Node:
  def __init__(self, key):
    self.left = None
    self.right = None
    self.val = key

def insert(root, key):
  if root is None:
    return Node(key)
  
  if root.val < key:
    root.right = insert(root.right, key)
  elif root.val >= key:
    root.left = insert(root.left, key)
  
  return root

def inorder_traversal(root):
  if root:
    inorder_traversal(root.left)
    print(root.val, end=" ")
    inorder_traversal(root.right)

root = None
keys = [15, 10, 20, 8, 12, 16, 25]

for key in keys:
  root = insert(root, key)

print("중위 순회 결과: ")
inorder_traversal(root)