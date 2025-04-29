---
title: "Two sum"
slug: "two-sum"

tags: ["LeetCode", "Arrays", "HashMap"]
subtopic: ["Simple Solution", "Dictionary Solution", "Time Complexity for Simple Solution", "Time Complexity for Dictionary Solution"]
description: ["Code", "Code", "O(n^2)", "O(n)"]
---
```python
def twoSum(self, nums, target):

    for i in range(len(nums)):
        for j in range(len(nums)):
            if(i != j):

                if (nums[i] + nums[j]) == target:
                    return (i, j)
```
```python
def twoSum(self, nums, target):

    subtracted = {}
    for i, temp in enumerate(nums):
        diff = target - temp
        if(diff in subtracted):
            return (subtracted[diff], i)
        subtracted[temp] = i

# Example usage
nums = [2, 7, 11, 15]
target = 9
print(two_sum(nums, target))
```

