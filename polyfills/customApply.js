function printAddress(state, country){
    console.log( `${this.address1} ${this.address2} \n ${state} - ${country}` );
}

const address = {
    address1: '64N',
    address2: 'XYZ Street'
};

Function.prototype.customApply = function(context, args){
    let currentContext = context || globalThis;
    let uniqueProp = Math.random();
    while( currentContext[uniqueProp] !== undefined ){
        uniqueProp = Math.random();
    }
    currentContext[uniqueProp] = this;
    let result = currentContext[uniqueProp](...args);
    delete currentContext[uniqueProp];
    return result;
}

printAddress.customApply(address, ["WB", "India"]);
