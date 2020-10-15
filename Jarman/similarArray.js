const similarArray = (arr1, arr2) => {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const sortArr1 = Array.from(set1).sort();
    const sortArr2 = Array.from(set2).sort();
    if (sortArr1.length != sortArr2.length) {
        return "they are not similar"
    }
    for (let i = 0; i < sortArr1.length; i++) {
        if (sortArr1[i] != sortArr2[i]) {
            return "they are not similar"
        }
    }
    return "they are similar"
}

console.log(similarArray([1, 2, 3, 3, 1, 2], [1, 1, 2, 3]));