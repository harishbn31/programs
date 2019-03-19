// function missing(arr){
//     for(let i=0;i<100;i++)
//     {
//         if(arr[i] != 0)
//         XOR ^= arr[i];
//         XOR ^= (i + 1);
//     }
//     return XOR;
//     // Read more: https://javarevisited.blogspot.com/2014/11/how-to-find-missing-number-on-integer-array-java.html#ixzz5dPky2kYm
// }
// console.log(missing([1,2,3,4,6,7,9,10,8]));
// function duplicate(arr){
//     var previous = arr[0];
//     var result = [arr[0]];
//         for ( i = 1; i < arr.length; i++) {
//             var next = arr[i];
//             if (previous == next) {
//                 arr.splice(1,i);
//                 ++i
//             }
//             previous = next;
//         }
//         return arr;
// }
// console.log(duplicate([1,2,2,3,3,4]));
// function largeSmall(arr){
//     var max = arr[0]
//     var min = arr[0]
//     for(i=0;i<arr.length;i++){
//         if(max > arr[i]){
//             max = arr[i]
//         }else if(min < arr[i]){
//             min = arr[i]
//         }
//     }
//     return `max: ${max} min: ${min}`
// }
// console.log(largeSmall([1,2,10,8,0,2,3,3,4]));
// function sumPairs(arr,n){
//     var arr = arr.sort(function(a, b){return a - b})
//     console.log(arr)
//     var left = 0
//     var right = arr.length -1
//     var obj = {}
//     while(left < right){
//         var sum = arr[left] + arr[right]; 
//         if(sum == n){ 
//             obj[arr[left]] = arr[right]
//             left = left + 1; 
//             right = right -1; 
//         }else if(sum < n){ 
//             left = left +1; 
//         }else if (sum > n) { 
//             right = right -1; 
//         }
//     }
//     return obj
// }
// console.log(sumPairs([2,10,6,1,5,8,9,15], 7));
// const a= [10,20,8,4,6]; 
// function binarySearch(arr,l,r,x){
//    var arr =  arr.sort(function(a,b){
//         return a - b;
//     })
//     var left = 0;
//     var right = a.length -1
//     while(left <= right){
//          var mid = (right - left)/2;
//         if(a[mid] == n){
//             return true;
//         }else if( n < a[mid]){
//             right = mid-1
//         }else if( n > a[mid]){
//             left = mid + 1
//         }
//     }
//     return false;
// let mid = Math.round(l + (r - l) / 2);
// //    console.log(arr)
//     if( r >= 1){
//         if (arr[mid] == x) {
//             return true; 
//         }
//         else if (arr[mid] > x) {
//             return binarySearch(arr, l, mid - 1, x); 
//         }
            
//         else if (arr[mid] < x) {
//             return binarySearch(arr, mid + 1, r, x); 
//         }
//     }else{
//         return false
//     }
// }
// console.log(binarySearch(a,0,a.length -1,10));
// var start = new Date().getTime();
// function recu(i,n){
//     console.log(i);
//     if(i<n){
//         i++
//          recu(i,n);
//     }
// }
// console.log(recu(0,20000))
// var end = new Date().getTime();
//     var time = end - start;
//     console.log('Execution time: ' + time/1000);

var start = new Date().getTime();

for (i = 0; i < 20; i++) {
// do something
//  for(j=0;j<10;j++){
    console.log(i);
//  }


}
var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time/1000);
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);