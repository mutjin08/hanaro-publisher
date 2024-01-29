from itertools import combinations_with_replacement
n = 3
for case in combinations_with_replacement(range(11), n):
  lion = [0 for _ in range(11)]
  for i in case:
    lion[10-i] += 1
  print(lion)