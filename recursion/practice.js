// find the minimum and maximum of the sum of four out of five numbers
function MiniMaxSum(arr) {
    var currentSums = [];
    for (var i = 0; i < arr.length; i++) {
        var currentArr = [];
        var elementI = arr[i];
        for (var j = 0; j < arr.length; j++) {
            var elementJ = arr[j];
            if (elementI === elementJ)
                continue;
            currentArr.push(elementJ);
        }
        console.log(currentArr);
        var sum = currentArr.reduce(function (current, next) { return current + next; });
        currentSums.push(sum);
    }
    currentSums.sort();
    console.log(currentSums[0], currentSums[currentSums.length - 1]);
}
// convert time in 12 hour format to 24 hour format
function timeConversion(s) {
    var splited = s.split(":");
    var hour = splited[0];
    var minute = splited[1];
    var seconds = splited[splited.length - 1].slice(0, 2);
    var amPm = splited[splited.length - 1].slice(-2);
    var defaultTime = hour + ":" + minute + ":" + seconds;
    return hour === "12" && amPm.toUpperCase() === "PM"
        ? defaultTime
        : hour === "12" && amPm.toUpperCase() === "AM"
            ? "00:" + minute + ":" + seconds
            : amPm.toUpperCase() === "PM"
                ? parseInt(hour) + 12 + ":" + minute + ":" + seconds
                : defaultTime;
}
// console.log("TIME CONVERSIONN", timeConversion("01:01:02PM"));
//search through a given string
function matchingString(strings, queries) {
    var result = [];
    queries.map(function (query) {
        var noOfresults = 0;
        strings.map(function (string) {
            if (string === query)
                noOfresults++;
        });
        result.push(noOfresults);
    });
    return result;
}
console.time("map");
console.log(matchingString(["ab", "ab", "abc"], ["bc", "abc", "ab"]));
console.timeEnd("map");
function matchingStringLoop(strings, queries) {
    var result = [];
    for (var i = 0; i < queries.length; i++) {
        var query = queries[i];
        var noOfresults = 0;
        for (var j = 0; j < strings.length; j++) {
            var string = strings[j];
            if (string === query)
                noOfresults++;
        }
        result.push(noOfresults);
    }
    return result;
}
console.time("loop");
console.log(matchingStringLoop(["ab", "ab", "abc"], ["bc", "abc", "ab"]));
console.timeEnd("loop");
