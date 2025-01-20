var once = function(fn) {
    let bool = false
    return function(...args){
        if(bool == true){
            return undefined
        }
        bool = true
        return fn(...args)
    }  
};