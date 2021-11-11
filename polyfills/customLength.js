let str = `Hello World`;

String.prototype.customLen = function(){
    var currentStr = this,
    len = 0;
    while( currentStr[len++] !== undefined );
    return len - 1 ;
}

// Object.defineProperty(String.prototype, 'customLen', {
//     value : function(){
//         var currentStr = this,
//         len = 0;
//         while( currentStr[len++] !== undefined );
//         return len - 1 ;
//     }
// });

console.log(str.customLen());