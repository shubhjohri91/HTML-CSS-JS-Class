function findDuplicates(arr) {
    const mem = {};
    for (let i = 0; i < arr.length; i++) {
        if (mem[arr[i]] != undefined) {
            return arr[i];
        }
        else {
            mem[arr[i]] = arr[i];
        }
    }
    return -1;
}

console.log(findDuplicates(['a', 'b', 'c', 'a']));
