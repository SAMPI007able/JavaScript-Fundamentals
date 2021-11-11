// const result = [1, 3, 6, 10].map(value=> ( value & 1 ) === 0 ? 'EVEN' : 'ODD');
Array.prototype.customMap = function(callback, current, index, array){
    let result = [];
    for( let i=0; i<this.length; i++ ){
        result.push( callback(this[i], i, this) );
    }
    return result;
}

const result = [1, 3, 6, 10].customMap(value=> ( value & 1 ) === 0 ? 'EVEN' : 'ODD');
console.log(result);