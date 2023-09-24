function cubeNumber(number) {
  if (typeof number !== "number" || number < 0) {
    return "please enter a Valid Number";
  } else {
    const cube = number * number * number;
    return cube;
  }
}

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "please ender good valid string";
  } else {
    if (string1.includes(string2)) {
      return true;
    }
    return false;
  }
}

function sortMaker(arr) {
  if (!Array.isArray(arr)) {
    return "please Provide an array of numbers";
  } else if (typeof arr[0] !=="number" || typeof arr[1] !=="number"|| arr[0] < 0  || arr[1] < 0) {
    return "Invalid input"
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (typeof item !== "number" || item < 0) {
        return "Invalid Input";
      } else {
        if (arr[0] === arr[1]) {
          return "equal";
        } else {
          arr.sort(function (a, b) {
            return b - a;
          });
          return arr;
        }
      }
    }
  }
}

function findAddress(obj) {
  if (typeof obj !== "object") {
    return "please provide a object type value";
  } else {
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";
    return street + ", " + house + ", " + society;
  }
}

function canPay(changeArray, totalDue) {
  if (
    !Array.isArray(changeArray) ||
    typeof totalDue !== "number" ||
    totalDue < 0
  ) {
    return "please return a valid input number";
  } else {
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
      const change = changeArray[i];
      sum = sum + change;
      if (typeof change !== "number" || change < 0 || change === " ") {
        return "please return a valid array and valid number";
      }
    }
    if (sum >= totalDue) {
      return true;
    }
    return false;
  }
}
