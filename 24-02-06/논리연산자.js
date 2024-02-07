let arr = [0, null, false]

for (let i = 0; i < 3; i++) {
  for (let j = i; j < 3; j++) {
    console.log(arr[i], "==", arr[j], i == j);
    console.log(arr[i], "===", arr[j], i === j);
  }
}

a = 7, b=4;
a&&b //논리연산
a&b //비트연산