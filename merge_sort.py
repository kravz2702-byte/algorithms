def mergeSort(A):
    if len(A)>1:
        print('splitting ', A)
        mid = len(A)//2
        left = A[:mid]
        right = A[mid:]
        print('left ', left, 'right ', right)
        mergeSort(left)
        mergeSort(right)
        print('left ', left, 'right ', right)
        i = j = k = 0
        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                A[k] = left[i]
                i = i+1
            else:
                A[k] = right[j]
                j = j+1
            k = k+1
        
        while i<len(left):
            A[k] = left[i]
            i = i+1
            k = k+1
            

        while j<len(right):
            A[k] = right[j]
            j = j+1
            k = k+1
    print('merging ', A)
    return A



mergeSort([4,3,2,5,7,1,8,9])
