 module.exports = function reverse (n) {
        let stringOfN = String(Math.abs(n));
        let i = 0;
        let result ='';
        while (i < stringOfN.length) {
            result =  stringOfN[i] + result;
            i += 1;
        }
        return +result;
}
