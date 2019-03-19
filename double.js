function whoIsNext(names, r){
    //your code here
  //   var result = []
    for(i=0;i<r;i++){
       name = names.unshift();
       console.log(name);
      names.push(name,name);
    }
    return names[r -1];
  }

var names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"]
var r = 1
var res = "Sheldon"
console.log(whoIsNext(names, r))