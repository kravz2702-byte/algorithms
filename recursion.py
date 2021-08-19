def factorials(n):
    print(n)
    if n==1:
        return n
    else:
        return n*factorials(n-1)
factorials(4)

