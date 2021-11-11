Array.prototype.customFilter = function(callback){
    let result = [];
    for( let i=0; i<this.length; i++ ){
        if( callback(this[i]) === true){
            result.push(this[i]);
        }
    }
    return result;
}

const result =  [1, 3, 6, 10].customFilter(value => (value & 1) === 0);
console.log(result);