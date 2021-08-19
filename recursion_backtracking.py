def backtrack(n, sequence):
    if n==1:
        return sequence
    else:
        return [
                y+x
                for y in backtrack(1, sequence)
                for x in backtrack(n-1, sequence)
                ]
print(backtrack(1,['a','b', 'c']))
print(backtrack(4,['a','b', 'c']))

