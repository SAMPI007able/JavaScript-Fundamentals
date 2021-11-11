// const result =  [1, 3, 6, 10].reduce((a, b) => a < b ? a: b);
// console.log(result);

Array.prototype.customReduce = function(callback, initial, context){
    let acc = initial || undefined;
    for(let i=0; i<this.length; i++){
        // acc is defined
        if( acc !== undefined ){
            acc = callback.call( context, acc, this[i], i, this )
        }
        // acc is undefined
        else{
            acc = this[i];
        }
    }
    return acc;
}

const result =  [1, 3, 6, 10].customReduce((a, b) => a > b ? a: b);
console.log(result);