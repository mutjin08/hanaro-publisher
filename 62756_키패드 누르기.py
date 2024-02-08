def distance(a, b):
    return abs(a[0]-b[0])+abs(a[1]-b[1])

def solution(numbers, hand):
    dic = {1:[0, 0], 2:[0, 1], 3:[0, 2], 4:[1, 0], 5:[1, 1], 6:[1, 2], 7:[2, 0], 8:[2, 1], 9:[2, 2], '*':[3, 0], 0:[3, 1], '#':[3, 2]}
    
    answer = ""
    leftHand = dic["*"]
    rightHand = dic["#"]
    for num in numbers:
        if num in [1, 4, 7]:
            leftHand = dic[num]
            answer += "L"
        elif num in [3, 6, 9]:
            rightHand = dic[num]
            answer += "R"
        else:
            leftDist, rightDist = distance(leftHand, dic[num]), distance(rightHand, dic[num])
            
            if leftDist < rightDist:
                leftHand = dic[num]
                answer += "L"
            elif rightDist < leftDist:
                rightHand = dic[num]
                answer += "R"
            else:
                if hand=="right":
                    rightHand = dic[num]
                    answer += "R"
                elif hand=="left":
                    leftHand = dic[num]
                    answer += "L"
    return answer