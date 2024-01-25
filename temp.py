from itertools import combinations
from itertools import product

def compare_score(aScores, bScores):
    answer = 0
    aScores.sort()
    bScores.sort()
    
    for a in aScores:
        left, right = 0, len(bScores)-1
        while left <= right:
            mid = (left+right)//2
            
            if bScores[mid] < a:
                answer+= mid - left + 1
                left = mid+1
            else:
                right = mid-1
                
    return answer

def calc_score(dice):
    answer = []
    for case in product(*dice):
        answer.append(sum(case))
    return answer

def split_dice(dice):
    answer = []
    n = len(dice)
    for aDiceIdx in combinations([i for i in range(n)], n//2):
        aDice, bDice = [], []
        for i in range(n):
            if i in aDiceIdx:
                aDice.append(dice[i])
            else:
                bDice.append(dice[i])
        aDiceIdx = [i+1 for i in aDiceIdx]
        answer.append([aDiceIdx, aDice, bDice])
    return answer
def solution(dice):
    aWinMax = -1
    for aDiceIdx, aDice, bDice in split_dice(dice):
        aScores, bScores = calc_score(aDice), calc_score(bDice)
        aDiceIdx, result = aDiceIdx, compare_score(aScores, bScores)
        
        if result > aWinMax:
            aWinMax = result
            answer = aDiceIdx
    return answer