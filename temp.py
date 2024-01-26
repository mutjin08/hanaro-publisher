def oneInArray(arr, target, x):
    for i in range(len(arr)):
        if arr[i]+x == target:
            return i
    return -1

def twoInArray(arr, target):
    for i in range(len(arr)):
        for j in range(i+1, len(arr)):
            if arr[i]+arr[j]==target:
                return i, j
    return -1, -1

def solution(coin, cards):
    n = len(cards)
    haves = cards[:n//3]
    cards = cards[n//3:]
    stage = 1
    
    while True:
        print(haves, cards)
        if len(cards)<2:
            return stage
        
        pick1, pick2 = cards[0], cards[1]
        cards = cards[2:]
        
        #1
        i, j = twoInArray(haves, n+1)
        if i!=-1 and j!=-1:
            haves = haves[:i]+haves[i+1:j]+haves[j+1:]
            stage += 1
            continue
            
        #2-1
        if coin>=1:
            i = oneInArray(haves, n+1, pick1)
            if i!=-1:
                haves = haves[:i]+haves[i+1:]
                coin -=1
                stage += 1
                continue
        
        #2-2
        if coin>=1:
            i = oneInArray(haves, n+1, pick2)
            if i!=-1:
                haves = haves[:i]+haves[i+1:]
                coin -=1
                stage += 1
                continue
                
        #3
        if coin>=2:
            if pick1+pick2==n+1:
                coin-=2
                stage+=1
                continue
                
        return stage