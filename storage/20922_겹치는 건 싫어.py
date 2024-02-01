# 다시풀기
def solution(n, k, arr):
  cnts = [0]*(max(arr)+1)
  start, end = 0, 0
  answer = 0
  while end < n:
    if cnts[arr[end]] < k:
      cnts[arr[end]] += 1
      end += 1
    else:
      cnts[arr[start]] -= 1
      start += 1
    answer = max(answer, end-start)
  return answer

n, k = list(map(int, input().split()))
arr = list(map(int, input().split()))

print(solution(n, k, arr))