// My code

function sumIntervals(intervals){
  let sum = 0;
  intervals.sort((a, b)=> {
    if(a[0] > b[0]) {
      return 1
    }
    if(a[0] < b[0]) {
      return -1
    }
    return 0
  })
  for(let i = 0; i < intervals.length; i++) {
    for (let j = i+1; j < intervals.length; j++) {
        if(intervals[i][1] > intervals[j][0]) {
          if(intervals[i][1] >= intervals[j][1]) {
            intervals.splice(j, 1);
            j = i;
          }
        if(intervals[i][1] < intervals[j][1]) {
          intervals[i] = [intervals[i][0], intervals[j][1]];
          intervals.splice(j, 1)
          j = i;
        }
      }
    }
  }
  console.log(intervals)
  for(let i = 0; i < intervals.length; i++) {
    sum += (intervals[i][1]-intervals[i][0])
  }
  return sum
}
console.log(sumIntervals([[1,4],[7, 10],[0, 3],[2, 6], [2, 8], [2, 4] ]))

//Best practice 

function sumIntervals(intervals){
  return intervals
    .sort(function(a, b){
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
      return 0;
    })
    .reduce(function(acc, interval) {
      if (interval[1] > acc.top) {
        acc.total += interval[1] - Math.max(interval[0], acc.top);
      }
      acc.top = Math.max(interval[1], acc.top);
      return acc;
    }, {total: 0, top: 0})
    .total;
}