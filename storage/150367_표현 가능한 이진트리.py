def dec_to_bin(target):
    answer= ""
    while target>0:
        answer += str(target%2)
        target //= 2
    return answer

def solution(numbers):
    answer = []
    for number in numbers:
        number = dec_to_bin(number)
        nodes = dec_to_bin(len(number)+1)
        print(number, nodes)
    return answer