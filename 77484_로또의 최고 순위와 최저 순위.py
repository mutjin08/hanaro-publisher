def solution(lottos, win_nums):
    dic = {}
    for num in win_nums:
        dic[num] = 1
    
    bonus, score = 0, 0
    for num in lottos:
        if num == 0:
            bonus += 1
            continue
        
        if num in dic:
            score += 1
            
    maxGrade = 7-(score+bonus) if (score+bonus)>=2 else 6
    minGrade = 7-(score) if (score)>=2 else 6
    
    return [maxGrade, minGrade]