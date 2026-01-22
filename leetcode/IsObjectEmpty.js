/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    let typee = typeof(obj);

    if(typee == "array"){
    let len = obj.length;
    let ans = len > 0 ? false : true ;

    return ans;
    }
    else{
        let count =0;
        for(i in obj){
            count++;
        }
        ans = count > 0 ? false : true ;
        return ans;
    }

};
