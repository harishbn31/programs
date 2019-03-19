var length = 10;
function fn() {
  this === window
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    // console.log(arguments[0])
    arguments[0]();
  }
};

obj.method(fn, 1);

// output 10 2


// var x = 21;
// var age = function () {
//     console.log(x);
//     var x = 20;
// };
// age ();

// console.log(typeof typeof 1);


// Neither 21, nor 20, the result is undefined

// It’s because JavaScript initialization is not hoisted.

// (Why doesn’t it show the global value of 21? The reason is that when the function is executed, it checks that there’s a local x variable present but doesn’t yet declare it, so it won’t look for global one.)

// function some(){
//   var x = 10;
//   setTimeout(function(){
    
//     console.log("hello", x)
//     var x = 5;
//   },3000)
// }

// some();
