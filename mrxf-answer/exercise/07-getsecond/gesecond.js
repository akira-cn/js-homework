function getSecond(n){
    let sortedN = n.sort((a, b) => b-a);
    return sortedN[1];
}

/*
 * Test 
 */

console.assert(getSecond([12,23,21,2]) === 21,'21 is the second');
console.assert(getSecond([1,2,3,4,5,6]) === 5, '5 is the second');
