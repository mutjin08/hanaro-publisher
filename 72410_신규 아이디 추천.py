def solution(new_id):
    new_id = new_id.lower()
    
    answer = ""
    for c in new_id:
        if c in "-_." or c.isalnum():
            answer += c
    
    #주의
    while ".." in answer:
        answer = answer.replace("..", ".")
    
    answer = answer.strip(".")
    
    if len(answer)==0:
        answer = "a"
    
    if len(answer)>=16:
        answer = answer[:15]
        answer = answer.rstrip(".")
        
    if len(answer)==1:
        answer = answer + answer[-1] + answer[-1]
    elif len(answer)==2:
        answer = answer + answer[-1]
    return answer