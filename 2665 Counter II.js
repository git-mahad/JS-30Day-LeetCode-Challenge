var createCounter = function(init) {
    let n = init;
    const obj = {
        increment(){
            return ++n
        },
        decrement(){
            return --n
        },
        reset(){
            return n = init;
        }
    }
    return obj
};