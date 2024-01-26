def twoArray(arr1, arr2, target):
    for i in range(len(arr1)):
        for j in range(len(arr2)):
            if arr1[i]+arr2[j]==target:
                return i, j
    return -1, -1

def oneArray(arr, target):
    for i in range(len(arr)):
        for j in range(i+1, len(arr)):
            if arr[i]+arr[j]==target:
                return i, j
    return -1, -1

def solution(coin, cards):
    n = len(cards)
    haves = cards[:n//3]
    cards = cards[n//3:]
    picks = []
    stage = 1
    
    while True:
        if len(cards)<2:
            return stage
        picks+=cards[:2]
        cards = cards[2:]
        
        #1
        i, j = oneArray(haves, n+1)
        if i!=-1 and j!=-1:
            haves = haves[:i]+haves[i+1:j]+haves[j+1:]
            stage += 1
            continue
            
        #2-1
        if coin>=1:
            i, j = twoArray(haves, picks, n+1)
            if i!=-1 and j!=-1:
                haves = haves[:i]+haves[i+1:]
                picks = picks[:j]+picks[j+1:]
                coin -=1
                stage += 1
                continue
                
        #3
        if coin>=2:
            i, j = oneArray(picks, n+1)
            if i!=-1 and j!=-1:
                picks = picks[:i]+picks[i+1:j]+picks[j+1:]
                coin-=2
                stage += 1
                continue
                
        return stage