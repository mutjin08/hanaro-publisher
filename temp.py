"""
전체 학생의 수 n
체육복을 도난당한 학생들의 번호가 담긴 배열 lost
여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve

체육수업을 들을 수 있는 학생의 최댓값을 return
"""
def solution(n, lost, reserve):
    answer = 0
    states = [1]*(n+1)
    
    for i in lost:
        states[i]-=1
    for i in reserve:
        states[i]+=1
    
    if states[1]==0 and states[2]==2:
        states[2]-=1
        states[1]+=1
    
    for i in range(2, n):
        if states[i]!=0:
            continue
        
        if states[i-1]==2:
            states[i-1]-=1
            states[i]+=1
            continue
        
        if states[i+1]==2:
            states[i+1]-=1
            states[i]+=1
            continue
    
    if states[n]==0 and states[n-1]==2:
        states[n-1]-=1
        states[n]+=1

    return n - states.count(0)