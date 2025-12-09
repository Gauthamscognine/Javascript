/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let res = [];
    intervals.sort((a, b) => a[0] - b[0]);
    let i = 0;

    while(i<intervals.length){
        let start = intervals[i][0];
        let end = intervals[i][1];

        while(i+1<intervals.length && end>=intervals[i+1][0]){
            end = Math.max(end,intervals[i+1][1]);
            i++;
        }
        res.push([start, end]);
        i++;

    }

    return res;
};

