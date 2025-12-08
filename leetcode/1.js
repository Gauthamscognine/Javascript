/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let ans=0;
    for(let a=1;a<=n;a++){
        for(let b=a+1;b<=n;b++){
            let c=Math.sqrt(a*a+b*b);
           // let sq=Math.sqrt(c);
            if(c<=n && Number.isInteger(c))ans+=2;
        }
    }
    return ans;
};