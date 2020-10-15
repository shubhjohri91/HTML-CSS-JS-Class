let array = ['abcs', 'sfsdss', 'dsavsd', 'sd', 'sdfgs'];

function longestStrings(arr) {
    let maxLength = 0;
    let stringArray = [];
    for (string of arr) {
        if (string.length > maxLength) {
            maxLength = string.length;
        }
    }

    for (string of arr) {
        if (string.length == maxLength) {
            stringArray.push(string);
        }
    }
    return stringArray;
}

console.log(longestStrings(array));