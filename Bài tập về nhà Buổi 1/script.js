const arr = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];

function foo(arr) {
    let a = [],b = [], prev;
    
    arr.sort();
 let i=0;
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    
    
    return [a, b];
}

var result = foo(arr);
console.log('value:' + result[0],)

var counts = {};

for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log( 'count:' + counts[2], );