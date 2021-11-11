function printAddress(state, country, city){
    console.log( `${this.address1} ${this.address2} \n ${city} ${state} - ${country}` );
}

const address = {
    address1: '64N',
    address2: 'XYZ Street'
};

Function.prototype.customBind = function(...args){
    var callback = this,
        ctx = args.splice(1);
    return function(...a){        
        callback.call(args[0], ...[...ctx, ...a]);
    }
}

const result = printAddress.customBind(address, "WB", "India");
result("Kolkata");