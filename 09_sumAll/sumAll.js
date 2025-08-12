const sumAll = function(start, end) {
    if(start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)){
        return "ERROR";
    }
    if(start > end){
        let tmp = start;
        start = end;
        end = tmp;
    }
    let res = 0;
    for(let i = start ; i <= end ; i++){
        res+=i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
