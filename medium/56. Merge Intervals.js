/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>{
        if(a[0]!=b[0]) return a[0]-b[0];
        return a[1]-b[1];
    })
    let start = intervals[0][0];
    let end = intervals[0][1];
    const merged = [];

    for(let i = 1;i<intervals.length;i++)
    {
        //We sorted by lowest first, this means this interval is in the larger current one
        if(intervals[i][1] < end) continue;
        else if(intervals[i][0] > end)
        {
            merged.push([start,end])
            start = intervals[i][0];
            end = intervals[i][1];
        }
        else end = intervals[i][1];

    }

    merged.push([start,end])

    return merged;

};