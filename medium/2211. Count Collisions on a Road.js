/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
    let collisions = 0;
    //find the first non left index, all these cars will not crash.
    let i =0;
    for(i;i<directions.length;i++)
    {
        if(directions[i]!="L") break;
    }

    let rightCount = 0;

    for(i;i<directions.length;i++)
    {
        //Count number of right cars.
        if(directions[i]=="R")
        {
            rightCount++;
            continue;
        }
        //Number that collide
        collisions+=rightCount;
        rightCount = 0;
        //L counts as two cars. One car is already included in the rightCount.
        if(directions[i] == "L") collisions++;
    }

    
    return collisions;

};