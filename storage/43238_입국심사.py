def solution(n, times):
    left, right = 1, max(times)*n
    answer = -1
    
    while left<=right:
        mid = (left+right)//2
        finished = 0
        
        for time in times:
            finished += mid//time
            
            if finished >= n:
                break
        
        if finished>=n:
            answer = mid
            right = mid - 1
        else:
            left = mid + 1
            
    return answer