class Node:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None

class BinaryTree:
  def __init__(self):
    self.root = None
  
  def insert(self, value):
    if self.root is None:
      self.root = Node(value)
    else:
      