def solution(n, m, l, positions):
    answer = -1
    positions.sort() #주의
    positions = [0]+positions+[l]
    start, end = 1, l-1
    while start <= end:
        build = 0
        mid = (start+end)//2
        for i in range(1, len(positions)):
            if positions[i]-positions[i-1] > mid:
                build += (positions[i]-positions[i-1]-1)//mid
                if build > m:
                    break
        if build > m:
            start = mid+1
        else:
            end = mid-1
            answer = mid
    return answer

n, m, l = list(map(int, input().split()))
positions = list(map(int, input().split()))
print(solution(n, m, l, positions))