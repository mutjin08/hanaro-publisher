def solution(n, m, a, b):
  answer = []
  ap, bp = 0, 0
  while ap<n and bp<m:
    if a[ap]<b[bp]:
      answer.append(a[ap])
      ap += 1
    else:
      answer.append(b[bp])
      bp += 1
  
  if ap>=n:
    answer.extend(b[bp:])
  if bp>=m:
    answer.extend(a[ap:])
    
  return answer

n, m = list(map(int, input().split()))
a = list(map(int, input().split()))
b = list(map(int, input().split()))
print(*solution(n, m, a, b))