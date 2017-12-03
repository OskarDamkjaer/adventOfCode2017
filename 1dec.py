num = "1111"
sum = 0

for i in range(len(num)):
    if(num[i] == num[(i+1) % len(num)]):
        sum += int(num[i])

print(sum)
