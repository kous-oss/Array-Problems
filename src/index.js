// Second Largest element in the array.

let arr = [10, 10, 10];
let max = arr[0];
let sec = -1;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    sec = max;
    max = arr[i];
  } else if (arr[i] === max) {
  } else {
    if (sec === -1) {
      sec = arr[i];
    } else if (arr[i] === sec) {
    } else if (arr[i] > sec) {
      sec = arr[i];
    }
  }
}

//document.write(sec);

// Check if an array is sorted.
let unsortedarr = [1];
let result = true;
for (let i = 1; i < unsortedarr.length; i++) {
  if (unsortedarr[i] < unsortedarr[i - 1]) {
    result = false;
    break;
  }
}

//console.log(result);

// Reverse an array.

let normalArr = [1, 2];
let left = 0;
let right = normalArr.length - 1;

while (left < right) {
  [normalArr[right], normalArr[left]] = [normalArr[left], normalArr[right]];
  left++;
  right--;
}

//document.write(normalArr);

// Move Zeroes to end.

let Arr = [0, 1, 2, 0, 8, 0, 4, 0, 600];

let res = 0;
for (let i = 0; i < Arr.length; i++) {
  if (Arr[i] !== 0) {
    Arr[res++] = Arr[i];
  }
}

for (let i = res; i < Arr.length; i++) {
  Arr[res++] = 0;
}

//document.write(Arr);

// left rotate array by one.

let withoutRotArr = [30, 5, 20];

let temp = withoutRotArr[0];
for (let i = 1; i < withoutRotArr.length; i++) {
  withoutRotArr[i - 1] = withoutRotArr[i];
}

withoutRotArr[withoutRotArr.length - 1] = temp;
//document.write(withoutRotArr);

// left rotate array by D places.

let shouldrotate = [1, 2, 3, 4, 5];
let d = 5;

reverse(shouldrotate, 0, d - 1);
reverse(shouldrotate, d, shouldrotate.length - 1);
reverse(shouldrotate, 0, shouldrotate.length - 1);
//document.write(shouldrotate);

function reverse(arr, start, end) {
  while (start < end) {
    [arr[end], arr[start]] = [arr[start], arr[end]];
    start++;
    end--;
  }
}

// Leaders of an array- left side of array shouldn't contain any element greater than the current idx
let leadersArr = [30, 20, 10];

//console.log(leadersArr[leadersArr.length-1]);
let max1 = leadersArr[leadersArr.length - 1];
for (let i = leadersArr.length - 2; i >= 0; i--) {
  if (leadersArr[i] > max1) {
    max1 = leadersArr[i];
    // console.log(max);
  }
}

// Maximum difference of array

// Logic- Find the first two elements diff as res
//        and assume first element as minVal
//        update res by calculating diff btn
//        curr idx and minval
//        update minval also

let mainArr = [30, 10, 8, 2];
let result2 = mainArr[1] - mainArr[0];
let minVal2 = mainArr[0];

for (let i = 1; i < mainArr.length; i++) {
  result2 = Math.max(result2, mainArr[i] - minVal2);
  minVal2 = Math.min(minVal2, mainArr[i]);
}

//console.log(result2);

// Stocks buy and sell problem.

// Logic : keep updating profit when we found a greater value.

let stocks = [1, 5, 3, 1, 2, 8];
let profit = 0;

for (let i = 1; i < stocks.length; i++) {
  if (stocks[i] > stocks[i - 1]) {
    profit += stocks[i] - stocks[i - 1];
  }
}

//document.write(profit);

// Rainwater trapping problem

let rainwater = [3, 0, 1, 2, 5];
let minWater = [];
let maxWater = [];

minWater[0] = rainwater[0];
for (let i = 1; i < rainwater.length; i++) {
  if (rainwater[i] > minWater[i - 1]) {
    minWater[i] = rainwater[i];
  } else {
    minWater[i] = minWater[i - 1];
  }
}

//console.log(minWater);

maxWater[rainwater.length - 1] = rainwater[rainwater.length - 1];

for (let i = rainwater.length - 2; i >= 0; i--) {
  if (rainwater[i] > maxWater[i + 1]) {
    maxWater[i] = rainwater[i];
  } else {
    maxWater[i] = maxWater[i + 1];
  }
}
//console.log(maxWater);

let res3 = 0;
for (let i = 1; i < rainwater.length - 1; i++) {
  res3 += Math.min(minWater[i], maxWater[i]) - rainwater[i];
}

//console.log(res3);

// Maximum Consecutive 1 in an array.
let onesarr = [1, 0, 1, 1, 1, 1, 0, 1, 1];
let count = 0;
let maxCountofOnes = 0;
for (let i = 0; i < onesarr.length; i++) {
  if (onesarr[i] === 1) {
    count++;
    maxCountofOnes = Math.max(maxCountofOnes, count);
  } else {
    count = 0;
  }
}

document.write(maxCountofOnes);

// Maximum Consecutive SubArray sum.

let sumArray = [-3, 8, -2, 4, -5, 6];
let currSum = sumArray[0];
let maxSum = currSum;

for (let i = 1; i < sumArray.length; i++) {
  currSum = Math.max(sumArray[i], currSum + sumArray[i]);
  maxSum = Math.max(maxSum, currSum);
}

//console.log(maxSum);

// Longest even -odd number subarr
let evenOdd = [5, 10, 20, 6, 3, 8];
let lencount = 1;
let maxCount = 1;

for (let i = 1; i <= evenOdd.length; i++) {
  if ((evenOdd[i] + evenOdd[i - 1]) % 2 === 1) {
    lencount += 1;
    maxCount = Math.max(maxCount, lencount);
  } else {
    lencount = 1;
  }
}

//console.log(maxCount);

// Maximum Circular Array sum
// max of normal array sum and circular array sum
// max of normal array - kadane algorithm
// max of circular array -> Array sum - min of normal array
// Instead of calculating min of normal array
// Calculate maximum of normal array by making negation of array elements
// So max of circular array = Array sum - (min of normal array)
// can be written as Array sum + (max of normal array with negation of array elements )

let circularArr = [3, -4, 5, 6, -8, 7];

function findMax(arr) {
  let currSum = arr[0];
  let maxSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currSum = Math.max(currSum + arr[i], arr[i]);
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}

let normalSum = findMax(circularArr);
let arraySum = circularArr.reduce((p, c) => p + c, 0);

for (let i = 0; i < circularArr.length; i++) {
  circularArr[i] = -circularArr[i];
}

let circularSum = arraySum + findMax(circularArr);
let resultofEntireArray = Math.max(circularSum, normalSum);
//console.log(resultofEntireArray);

// Majority Element.
// Moory Voting Algotithm
let majorElarr = [20, 30, 40, 50, 50, 50, 50];
let majEl = 0,
  majorcount = 1;

for (let i = 1; i < majorElarr.length; i++) {
  if (majorElarr[res] === majorElarr[i]) majorcount++;
  else majorcount--;

  if (majorcount === 0) {
    majEl = i;
    majorcount = 1;
  }
}

majorcount = 0;

for (let i = 0; i < majorElarr.length; i++)
  if (majorElarr[majEl] === majorElarr[i]) majorcount++;

if (majorcount <= Math.floor(majorElarr.length / 2)) res = -1;

console.log(res);

//Minimum group flips to make all elements same.
let groupAr = [0, 0, 1, 1, 0, 0, 1, 1, 0];
let n = groupAr.length;
for (let i = 1; i < n; i++) {
  if (groupAr[i] !== groupAr[i - 1]) {
    if (groupAr[i] !== groupAr[0]) console.log("From " + i + " to ");
    else console.log(i - 1);
  }
}

if (groupAr[n - 1] !== groupAr[0]) console.log(n - 1);

// Sliding Window Technique
function subArraySum(arr, n, sum) {
  /* Initialize curr_sum as value of first element 
	and starting point as 0 */
  let curr_sum = arr[0],
    start = 0,
    i;

  /* Add elements one by one to curr_sum and if the curr_sum exceeds the 
	sum, then remove starting element */
  for (i = 1; i <= n; i++) {
    // If curr_sum exceeds the sum, then remove the starting elements
    while (curr_sum > sum && start < i - 1) {
      curr_sum = curr_sum - arr[start];
      start++;
    }

    // If curr_sum becomes equal to sum, then return true
    if (curr_sum === sum) {
      console.log("Sum found between indexes %d and %d", start, i - 1);
      return 1;
    }

    // Add this element to curr_sum
    if (i < n) curr_sum = curr_sum + arr[i];
  }

  // If we reach here, then no subarray
  console.log("No subarray found");
  return 0;
}
