var map = function(arr, fn) {
    
    var new_arr = []

    for(let i = 0; i < arr.length; i++){
        new_arr[i] = fn(arr[i], i)
    }
    
    return new_arr;
};