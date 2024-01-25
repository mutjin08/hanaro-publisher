from collections import deque

def bfs(maps, x1, y1, x2, y2):
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    
    
    n, m = len(maps), len(maps[0])
    visited = [[0 for _ in range(m)] for _ in range(n)]
    
    q = deque([[[x1, y1, 0]]])
    visited[x1][y1] = 1
    
    while q:
        x, y, cnt = q.popleft()
        nx = x + dx[i]
        ny = y + dy[i]
        if 0<=nx<n and 0<=ny<m and not visited[nx][ny]:
            if nx==x2 and ny==y2:
                return cnt+1
            q.append([nx, ny, cnt+1])
            visited[nx][ny] = 1
    if not visited[x2][y2]:
        return -1
    

def solution(maps):
    n, m = len(maps), len(maps[0])
    return bfs(maps, 0, 0, n-1, m-1)