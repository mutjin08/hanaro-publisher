# 다시풀기
def solution(n, liquids):
  liquids.sort()
  start, end = 0, n-1
  min_dist = 2000000000

  while start < end:
    now_sum = liquids[start] + liquids[end]
    now_dist = abs(now_sum)

    if now_dist < min_dist:
      min_dist = now_dist
      answer = [liquids[start], liquids[end]]

      if now_dist==0:
        break
    
    if now_sum < 0:
      start += 1
    else:
      end -= 1
  return answer


n = int(input())
liquids = list(map(int, input().split()))
print(*solution(n, liquids))