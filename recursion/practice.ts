// find the minimum and maximum of the sum of four out of five numbers
function MiniMaxSum(arr: number[]): void {
  let currentSums: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    let currentArr: number[] = [];
    const elementI = arr[i];
    for (let j = 0; j < arr.length; j++) {
      const elementJ = arr[j];
      if (elementI === elementJ) continue;
      currentArr.push(elementJ);
    }
    console.log(currentArr);
    const sum = currentArr.reduce((current, next) => current + next);
    currentSums.push(sum);
  }
  currentSums.sort();
  console.log(currentSums[0], currentSums[currentSums.length - 1]);
}

// convert time in 12 hour format to 24 hour format
function timeConversion(s: string): string {
  const splited = s.split(":");
  const hour = splited[0];
  const minute = splited[1];
  const seconds = splited[splited.length - 1].slice(0, 2);
  const amPm = splited[splited.length - 1].slice(-2);
  const defaultTime = `${hour}:${minute}:${seconds}`;
  return hour === "12" && amPm.toUpperCase() === "PM"
    ? defaultTime
    : hour === "12" && amPm.toUpperCase() === "AM"
    ? `00:${minute}:${seconds}`
    : amPm.toUpperCase() === "PM"
    ? `${parseInt(hour) + 12}:${minute}:${seconds}`
    : defaultTime;
}
// console.log("TIME CONVERSIONN", timeConversion("01:01:02PM"));

//search through a given string
function matchingString(strings: string[], queries: string[]): number[] {
  let result: number[] = [];
  queries.map((query) => {
    let noOfresults: number = 0;
    strings.map((string) => {
      if (string === query) noOfresults++;
    });
    result.push(noOfresults);
  });
  return result;
}
console.time("map");
console.log(matchingString(["ab", "ab", "abc"], ["bc", "abc", "ab"]));
console.timeEnd("map");

function matchingStringLoop(strings: string[], queries: string[]): number[] {
  let result: number[] = [];
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    let noOfresults: number = 0;
    for (let j = 0; j < strings.length; j++) {
      const string = strings[j];
      if (string === query) noOfresults++;
    }
    result.push(noOfresults);
  }
  return result;
}
console.time("loop");
console.log(matchingStringLoop(["ab", "ab", "abc"], ["bc", "abc", "ab"]));
console.timeEnd("loop");
