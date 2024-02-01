# 이거 two pointer가 아니라 sliding window아님?
def solution(n, x, logs):
  cands = []
  for i in range(0, n-x):
    cands.append(sum(logs[i:i+x]))
  if max(cands)==0:
    return "SAD"
  return max(cands), cands.count(max(cands))

n, x = list(map(int, input().split()))
logs = list(map(int, input().split()))
for s in solution(n, x, logs):
  print(s)