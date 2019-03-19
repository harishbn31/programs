// // var arr = ['a', 'b', 'c', 'd', 'e'] 
// // var idx = [1,3];
// // function some(a,b){
// //     var result =[];

// //     // for(i=0;i<a.length;i++){
// //     //    if(!b.includes(i)){
// //     //        result.push(a[i])
// //     //    }
// //     // }
// //     // return result;
   
// //     return sum
// // }

// // console.log(some(arr,idx));
// var promise = new Promise(function(resolve,reject){
//     setTimeout(() => resolve("done!"), 1000);
// })
// var p2 = new Promise(function(resolve,reject){
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
// })
// promise.then(
//     result => console.log(result), // shows "done!" after 1 second
//     error => console.log(error) // doesn't run
//   );
//   p2.then(
//     result => console.log(result), // shows "done!" after 1 second
//     error => console.log(error) // doesn't run
//   );
// console.log(msg);
// if (20>10){
//   var msg = '20 greater than 10'
// }
// function a(10,20){
//  return arguments[0]
// }

// var name= 'hi'
// var name= 'hello'
// console.log(name)
// let addTwo = 
//     a => 
//         b => 
//             c => 
//                 a+b+c
// let x = 0
// let add = (a) =>{

//          return (a) => {
//              let x = add(a);
//             return x+a;
//          }
// }
// function add(n){
//     var fn = function(x) {
//       return add(n + x);
//     };
    
//     fn.valueOf = function() {
//       return n;
//     };
    
//     return fn;
//   }
// var add = function(n) {
//     const f = x => add(n + x)
//     f.valueOf = () => n
//     return f;
//   }
// function add(n){
//     // Let the currying begin!
//     var sum = n;
//     function f (k){
//       sum += k;
//       return f;
//     }
//    f.valueOf = function(){return sum}
//     return f
//   }
// console.log(add(2))
function validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
  }
  console.log(validParentheses( "(())" ))
//   console.log(validParentheses( "())" ))