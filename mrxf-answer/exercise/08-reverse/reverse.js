function reverse(str){
    return str.split('').reverse().join('');
}


/**
 * Test
 */

console.assert(reverse('abcde') == 'edcba', 'basic test fail!');
console.assert(reverse('helloworld') == 'dlrowolleh','helloworld reverse is dlorwolleh');